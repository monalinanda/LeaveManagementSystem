import { useEffect, useState } from "react";
import {
  ProtectedcNavigation,
  ProtectedcNavigationforManager,
  holidays,
} from "../constants/constant";
import { useOutletContext } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_LEAVES } from "../graphql/queries/leave.Query";
import Navbar from "./Navbar";
import LeaveCard from "./ui/LeaveCard";

const Dashboard = () => {
  const { authenticatedUser } = useOutletContext();
  const [activeTab, setActiveTab] = useState("Pending");
  const [usersLeaves, setUsersLeaves] = useState([]);
  const [hidden, setHidden] = useState(true);
  const tabs = [
    { id: 1, label: "Pending" },
    { id: 2, label: "Approved" },
    { id: 3, label: "Rejected" },
  ];
  const { loading, data } = useQuery(GET_LEAVES, {
    onCompleted: (data) => {
      setUsersLeaves(data.leaves);
    },
  });

  const approvedItems = data?.leaves.filter(
    (item) => item.status === "approved"
  );
  const pendingItems = data?.leaves.filter((item) => item.status === "pending");
  const rejectedItems = data?.leaves.filter(
    (item) => item.status === "rejected"
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Pending":
        return (
          <>
            {" "}
            {pendingItems?.length == 0 ? (
              <p className="text-xl m-auto shadow-lg p-4 ">
                You don't have any {activeTab} Leaves .
              </p>
            ) : (
              <LeaveCard leaves={pendingItems} />
            )}
          </>
        );
      case "Approved":
        return (
          <>
            {" "}
            {approvedItems?.length == 0 ? (
              <p className="text-xl m-auto shadow-lg p-4 ">
                You don't have any {activeTab} Leaves .
              </p>
            ) : (
              <LeaveCard leaves={approvedItems} />
            )}
          </>
        );
      case "Rejected":
        return (
          <>
            {" "}
            {rejectedItems?.length == 0 ? (
              <p className="text-xl m-auto shadow-lg p-4 ">
                You don't have any {activeTab} Leaves .
              </p>
            ) : (
              <LeaveCard leaves={rejectedItems} />
            )}
          </>
        );
      default:
        return <div>Select a tab to see the content</div>;
    }
  };

  const handleHolidays = () => {
    setHidden(false);
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl m-auto mt-5">
        <header className="bg-white shadow-xl border-gray-300">
          <div className="mx-auto w-full px-4 py-6 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
            <div className="text-lg font-bold tracking-tight text-gray-900 flex  items-baseline">
              <h4 className=" mr-3 flex items-baseline">
                <span className=" mr-4">Total Leaves</span>
                <span className="bg-secondary rounded-full p-5 text-w w-8 h-8  flex items-center justify-center text-white">
                  20
                </span>
              </h4>
              <button
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={handleHolidays}
              >
                Holidays
              </button>
            </div>
          </div>
        </header>
        <main className="">
          <div className="flex  justify-between  mt-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.label)}
                className={`py-2 px-4 focus:outline-none ${
                  activeTab === tab.label
                    ? "border-b-2 border-blue-500 text-white bg-secondary w-56 flex justify-between p-3 rounded-md hover: cursor-pointer"
                    : "text-black hover:bg-yellow-500  bg-secondary  w-56 flex justify-between p-3 rounded-md"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-14 flex flex-col">
            <h4 className=" font-bold text-2xl border-b-2 mb-8 border-b-gray-200">
              {activeTab}
            </h4>
            <div className="sm:flex  justify-start gap-2 " >{renderContent()}</div>
          </div>

          <div
            id="default-modal"
            aria-hidden={hidden}
            className={`${
              hidden ? "hidden" : "block"
            } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm bg-white/30 `}
          >
            <div className="relative p-4 w-full max-w-2xl max-h-full ">
              <div className="relative  rounded-lg bg-white shadow-xl border-gray-300">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t bg-yellow-500 ">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    Holidays
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-hide="default-modal"
                    onClick={() => setHidden(!hidden)}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <ol>
                    {holidays.map((holiday, index) => (
                      <li key={index} className=" text-lg m-2">
                        {index + 1} - {holiday}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
