import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import {
  ProtectedcNavigation,
  ProtectedcNavigationforManager,
} from "../constants/constant";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.Query";

const RootLayout = () => {
  const { loading, data } = useQuery(GET_AUTHENTICATED_USER);
  const authenticatedUser = data?.authUser?.userType;
  const navigation = () => {
    switch (authenticatedUser) {
      case "Manager":
        return <Navbar navigation={ProtectedcNavigationforManager} />;
      case "Engineer":
        return <Navbar navigation={ProtectedcNavigation} />;
      case "HR":
        return <Navbar navigation={ProtectedcNavigation} />;
      default:
        return null;
    }
  };
  return (
    <div className=" flex sm:gap-1  flex-col w-screen h-screen items-center ">
      <div className=" w-full pl-5 pr-5 h-screen ">
        {navigation()}
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
