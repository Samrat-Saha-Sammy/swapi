import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLayout = () => {
	return (
		<div className="flex flex-wrap place-items-center w-full overflow-hidden">
			<section className="relative mx-auto">
				{/* navbar */}
				<nav className="flex justify-between bg-gray-900 text-white w-screen">
					<div className="px-5 xl:px-12 py-6 flex w-full items-center">
						<NavLink to="/" className="text-3xl font-bold font-heading">
							Logo Here.
						</NavLink>

						{/* Nav Links */}
						<ul className="hidden md:flex px-4 ml-auto font-semibold font-heading space-x-12">
							<li>
								<NavLink
									to="/"
									className={({ isActive }) =>
										`px-4 py-2 rounded-md border text-gray-200 ${
											isActive
												? "text-indigo-400 border border-violet-400"
												: "border-gray-900 hover:text-gray-600"
										}`
									}
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/liked"
									className={({ isActive }) =>
										`px-4 py-2 rounded-md border text-gray-200 ${
											isActive
												? "text-indigo-400 border-violet-400"
												: "border-gray-900 hover:text-gray-600 "
										}`
									}
								>
									Favourites
								</NavLink>
							</li>
						</ul>
					</div>
				</nav>
			</section>
		</div>
	);
};

export default NavBarLayout;
