import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import { StateContext } from "./utils/StateContext";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/SignUpPage";
import PrivateRoutes from "./utils/PrivateRoute";
import PublicRoutes from "./utils/PublicRoute";
import Dashboard from "./components/Dashboard";
import RootLayout from "./components/RootLayout";
import LeavePlan from "./components/leave/LeavePlan";
import EngineersLeaves from "./components/leave/EngineersLeaves";
import LeavePolicy from "./components/LeavePolicy";
import Customers from "./components/Customers";
import Pricing from "./components/Pricing";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          element: <PrivateRoutes />,
          children: [
            {
              path: "/home",
              element: <Home />,
            },
            {
              path: "/leavePlan",
              element: <LeavePlan />,
            },
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/engineers-leave",
              element: <EngineersLeaves />,
            },
            {
              path: "/leave-policy",
              element: <LeavePolicy />,
            },
          ],
        },
        {
          element: <PublicRoutes />,
          children: [
            {
              path: "/",
              element: <LandingPage />,
            },
            {
              path: "/login",
              element: <LoginPage />,
            },
            {
              path: "/signup",
              element: <SignUpPage />,
            },
            {
              path: "/customers",
              element: <Customers />,
            },
            {
              path: "/pricing",
              element: <Pricing />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <StateContext>
      <RouterProvider router={router} />
    </StateContext>
  );
}

export default App;
