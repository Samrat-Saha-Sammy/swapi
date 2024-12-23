import React from "react";
import HeaderLayout from "../header-layout";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBarLayout from "../navbar-layout";

/**
 * MainLayout component serves as the primary layout for the application.
 * It includes a navigation bar, a header section, and a space to render dynamic content
 * using the `Outlet` from `react-router-dom`. It also integrates a toast notification system
 * through the `Toaster` component.
 *
 * @component
 * @returns {JSX.Element} The rendered MainLayout component, including navigation, header, and dynamic content area.
 */
const MainLayout: React.FC = () => {
	return (
		<>
			<NavBarLayout />
			<div className="flex min-h-screen justify-center bg-gray-100 p-6">
				<div className="w-full max-w-3xl space-y-6">
					<Toaster position="top-center" reverseOrder={false} />
					<HeaderLayout />
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default MainLayout;
