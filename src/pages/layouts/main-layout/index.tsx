import React from "react";
import HeaderLayout from "../header-layout";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100 p-6">
      <div className="w-full max-w-3xl space-y-6">
        <HeaderLayout />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
