import { Outlet, Navigate } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.Query";

function PublicRoutes() {
  const { loading, data } = useQuery(GET_AUTHENTICATED_USER);

  if (loading) return null;

  const authenticatedUser = data?.authUser;

  if (authenticatedUser) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
}

export default PublicRoutes;
