import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = () => {
  let navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("token") && navigate("/login");
  });
  return <Outlet />;
};

export default ProtectedRoute;
