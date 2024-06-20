import { useState, useEffect } from "react";
import InputField from "../ui/InputField";
import Button from "../ui/Button";
import { useMutation } from "@apollo/client";
import { CREATE_LEAVE } from "../../graphql/mutations/leave.mutation";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SelectInput from "../../components/ui/SelectInput";
import { useOutletContext } from "react-router-dom";

const LeaveReasons = ({ selectedCategory, managers }) => {
  const navigate = useNavigate();
  const { authenticatedUser } = useOutletContext();
  const [managersList, setManagersList] = useState([]);
  const [requestedLeaveData, setRequestedLeaveData] = useState({
    description: "",
    subject: "",
    category: selectedCategory,
    leavestart: "",
    leaveend: "",
    manageremail: "",
    status: "pending",
  });
  const [createLeave, { loading }] = useMutation(CREATE_LEAVE, {
    refetchQueries: ["GetLeaves"],
  });

  useEffect(() => {
    const manager = managers?.managers.filter(
      (item) => item.email !== authenticatedUser.email
    );
    const managersemail = manager?.map((item) => item.email);
    setManagersList(managersemail);
  }, [managers]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestedLeaveData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLeave({
        variables: {
          input: requestedLeaveData,
        },
      });
      toast.success("Leave added  successfully");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      toast.error("All fields are equired.");
    }
  };

  return (
    <>
      <Toaster />
      <h1 className="sm:text-4xl text-3xl font-thin tracking-tight text-primary font-serif leading-normal text-left mb-10">
        Request for Leave
      </h1>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Subject"
          id="subject"
          name="subject"
          value={requestedLeaveData.subject}
          onChange={handleChange}
        />
        <SelectInput
          options={managersList && managersList}
          value={requestedLeaveData.manageremail}
          name="manageremail"
          onChange={handleChange}
          label="Manager Email"
        />
        {/* <InputField
          type="text"
          label="Manager Email"
          id="manageremail"
          name="manageremail"
          value={requestedLeaveData.manageremail}
          onChange={handleChange}
        /> */}
        <InputField
          type="date"
          label="Leave Start"
          id="leavestart"
          name="leavestart"
          value={requestedLeaveData.leavestart}
          onChange={handleChange}
        />
        <InputField
          type="date"
          label="Leave End"
          id="leaveend"
          name="leaveend"
          value={requestedLeaveData.leaveend}
          onChange={handleChange}
        />
        <textarea
          value={requestedLeaveData.description}
          name="description"
          onChange={handleChange}
          rows={4} // Adjust the number of rows as needed
          cols={50} // Adjust the number of columns as needed
          placeholder="Describe something..."
          className="border border-gray-400 mt-10 p-2"
        />

        <Button name="Request Leave" type="submit" />
      </form>
    </>
  );
};

export default LeaveReasons;
