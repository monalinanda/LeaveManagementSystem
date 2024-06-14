import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ENGINEERS_LEAVES } from "../../graphql/queries/leave.Query";
import { UPDATE_LEAVE_STATUS } from "../../graphql/mutations/leave.mutation";
import LeaveModal from "./LeaveModal";
import toast, { Toaster } from "react-hot-toast";

const EngineersLeaves = () => {
  const { authenticatedUser } = useOutletContext();
  const [assignedLeaves, setAssignedLeaves] = useState([]);
  const [selectedleave, setSelectedleave] = useState();
  const [flag, setFlag] = useState(false);
  const { loading, data } = useQuery(GET_ENGINEERS_LEAVES);

  const [UpdateLeaveStatus, { loading: loadingUpdate }] = useMutation(
    UPDATE_LEAVE_STATUS,
    {
      // https://github.com/apollographql/apollo-client/issues/5419 => refetchQueries is not working, and here is how we fixed it
      refetchQueries: [{ query: GET_ENGINEERS_LEAVES }],
    }
  );

  useEffect(() => {
    const leaves = data?.engineersLeaves;
    setAssignedLeaves(leaves);
  }, [data]);

  const handleSubmit = async (data) => {
    try {
      await UpdateLeaveStatus({
        variables: {
          input: data,
        },
      });
      toast.success("Leave updated successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleDataFromChild = (data) => {
    setFlag(data);
  };

  const handleEdit = (id) => {
    setFlag(true);
    const selectedrow = assignedLeaves?.filter((item) => item._id === id);
    setSelectedleave(selectedrow);
  };
  return (
    <div className="relative overflow-x-auto">
      <Toaster />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Employee name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Subject
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Action Requierd
            </th>
          </tr>
        </thead>
        <tbody>
          {assignedLeaves?.map((leave, index) => (
            
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {leave.name}
                </th>
                <td className="px-6 py-4">{leave.email}</td>
                <td className="px-6 py-4">{leave.subject}</td>
                <td className="px-6 py-4">{leave.category}</td>
                <td className="px-6 py-4">{leave.status}</td>
                <td
                  className="px-6 py-4  cursor-pointer"
                  onClick={() => handleEdit(leave._id)}
                >
                  Edit
                </td>
              </tr>
          
          ))}
        </tbody>
      </table>
      {selectedleave && (
        <LeaveModal
          flag={flag}
          leave={selectedleave[0]}
          updateStatus={handleSubmit}
          updateFlag={handleDataFromChild}
        />
      )}
    </div>
  );
};

export default EngineersLeaves;
