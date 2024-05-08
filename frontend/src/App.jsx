import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customers from "./components/Customers";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
// import LeaveType from "./components/LeaveType";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { StateContext } from "./utils/StateContext";
// import useMediaList from "./hooks/useUserLogin";
// import NewLeaveForm from "./components/leave/NewLeaveForm";
import LeavLists from "./components/leave/LeavLists";
import LandingPage from "./components/LandingPage";
import EmployeeLeaveHomepage from "./components/leave/EmployeeLeaveHomepage";


function App() {
  // useMediaList();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/customers",
      element: <Customers />,
    },
    // {
    //   path: "/leave-type-list",
    //   element: <LeaveType />,
    // },
    // {
    //   path: "/leave-create-update",
    //   element: <NewLeaveForm />,
    // },
    {
      path: "/leave-list",
      element: <LeavLists />,
    },
    {
      path: "/employee-leave-page",
      element: <EmployeeLeaveHomepage />,
    },
   
  ]);
  return (
 <StateContext>
      <Navbar />
      <div className=" flex sm:gap-1  flex-col w-screen h-screen items-center ">
        <div className=" max-w-[90%] pl-5 pr-5">
          <RouterProvider router={appRouter} />
        </div>
      </div>
      </StateContext>
  );
}

export default App;
