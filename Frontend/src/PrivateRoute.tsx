import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }: any) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;
