import React from "react";

/**
 * HeaderLayout component renders the header section of the page.
 * It includes the main title of the project or application along with a brief description or tagline.
 *
 * @component
 * @returns {JSX.Element} The rendered HeaderLayout component with the title and description.
 */
const HeaderLayout: React.FC = () => {
	return (
		<header className="space-y-2">
			<h1 className="text-3xl font-bold text-gray-800">
				Frontend Technical Activity
			</h1>
			<p className="text-gray-600">
				A brief description or tagline about the project can go here.
			</p>
		</header>
	);
};

export default HeaderLayout;
