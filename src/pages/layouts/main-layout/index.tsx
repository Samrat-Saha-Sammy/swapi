import React from "react";
import HeaderLayout from "../header-layout";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout: React.FC = () => {
	return (
		<div className="flex min-h-screen justify-center bg-gray-100 p-6">
			<div className="w-full max-w-3xl space-y-6">
				<Toaster position="top-right" reverseOrder={false} />
				<HeaderLayout />
				<Outlet />
			</div>
		</div>
	);
};

export default MainLayout;
