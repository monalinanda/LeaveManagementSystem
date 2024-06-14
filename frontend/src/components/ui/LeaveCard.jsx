import React, { useState } from "react";
import LeaveReasons from "../leave/LeaveReasons";

const LeaveCard = ({ leaves }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      {leaves?.map((leave) => (
        <a
          href="#"
          className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow  bg-yellow-500 hover: cursor-pointer mt-3"
          onClick={handleClick}
        >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {leave.subject}
          </h5>
          <p className="font-normal  dark:text-primary">
            start Date : {leave.leavestart}
          </p>
          <p className="font-normal  dark:text-primary mt-5">
            End Date : {leave.leaveend}
          </p>

          <p className="font-normal text-primary mt-5">{leave.description}</p>
          <p className="font-normal text-primary mt-5">
            status : {leave.status}
          </p>
        </a>
      ))}
      {show ? (
        <>
          <div
            className=" hidden"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <LeaveReasons />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default LeaveCard;
