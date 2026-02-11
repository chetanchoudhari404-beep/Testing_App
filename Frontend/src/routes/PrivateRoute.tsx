import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import api from "../api";

interface Props {
  children: ReactNode;
}

const PrivateRoute = ({ children }: Props) => {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    api
      .get("/profile")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <p>Loading...</p>;

  return isAuth ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
