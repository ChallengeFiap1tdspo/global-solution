import React from "react";
import { Navigate, useLocation } from "react-router-dom";

type ProtectRouteProps = {
  children: React.ReactNode;
};

export default function ProtectRoute({ children }: ProtectRouteProps) {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (!token) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  return <>{children}</>;
}
