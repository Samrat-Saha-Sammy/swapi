import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import NavBarLayout from ".";

describe("NavBarLayout Component", () => {
	const renderWithRouter = () =>
		render(
			<BrowserRouter>
				<NavBarLayout />
			</BrowserRouter>
		);

	it("renders the logo with the correct text", () => {
		renderWithRouter();
		expect(screen.getByText(/Logo Here\./i)).toBeInTheDocument();
	});

	it("renders navigation links for Home and Favourites", () => {
		renderWithRouter();
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		expect(screen.getByText(/Favourites/i)).toBeInTheDocument();
	});

	it("applies active styles to the current route", async () => {
		renderWithRouter();

		// Simulate navigation
		const homeLink = screen.getByText(/Home/i);
		const favouritesLink = screen.getByText(/Favourites/i);

		// By default, "Home" should be active
		expect(homeLink).toHaveClass("text-indigo-400");
		expect(favouritesLink).not.toHaveClass("text-indigo-400");

		// Simulate clicking the "Favourites" link
		await userEvent.click(favouritesLink);

		// Validate class changes for active styles
		expect(favouritesLink).toHaveClass("text-indigo-400");
		expect(homeLink).not.toHaveClass("text-indigo-400");
	});

	it("contains the correct structure and classes", () => {
		renderWithRouter();

		const nav = screen.getByRole("navigation");
		expect(nav).toHaveClass(
			"flex justify-between bg-gray-900 text-white w-screen"
		);
	});
});
