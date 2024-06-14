
import InputField from "../ui/InputField";

const LeaveModal = ({ flag, leave, updateStatus, updateFlag }) => {

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      status: "approved",
      leaveId: leave._id,
    };
    updateStatus(inputData);
    updateFlag(false);
  };

  return (
    <div
      className={`relative z-10 ${flag === true ? "block" : "hidden"}`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="">
                <form onSubmit={handleSubmit}>
                  <InputField
                    label="Subject"
                    id="subject"
                    name="subject"
                    value={leave.subject}
                    disabled={true}
                  />
                  <InputField
                    type="date"
                    label="Leave Start"
                    id="leavestart"
                    name="leavestart"
                    value={leave.leavestart}
                    disabled={true}
                  />
                  <InputField
                    type="date"
                    label="Leave End"
                    id="leaveend"
                    name="leaveend"
                    value={leave.leaveend}
                    disabled={true}
                  />
                  <textarea
                    value={leave.description}
                    name="description"
                    rows={4} // Adjust the number of rows as needed
                    cols={50} // Adjust the number of columns as needed
                    placeholder="Describe something..."
                    disabled
                    className="border border-gray-400 mt-10 p-2"
                  />
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="Submit"
                      className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto ${
                        leave.status === "approved"
                          ? "bg-gray-500 cursor-not-allowed"
                          : "bg-green-600  hover:bg-green-500 "
                      }`}
                      disabled={leave.status === "approved" && true}
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => updateFlag(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveModal;
