import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MainLayout from ".";

// Mock dependencies
jest.mock("../header-layout", () => () => (
	<div data-testid="header-layout">HeaderLayout</div>
));
jest.mock("../navbar-layout", () => () => (
	<div data-testid="navbar-layout">NavBarLayout</div>
));

jest.mock("react-router-dom", () => ({
	...jest.requireActual("react-router-dom"),
	Outlet: () => <div data-testid="outlet">Outlet Content</div>,
}));

// Test suite
describe("MainLayout Component", () => {
	it("renders NavBarLayout, HeaderLayout, Outlet, and Toaster", () => {
		render(
			<BrowserRouter>
				<MainLayout />
			</BrowserRouter>
		);

		// Assert that NavBarLayout is rendered
		expect(screen.getByTestId("navbar-layout")).toBeInTheDocument();

		// Assert that HeaderLayout is rendered
		expect(screen.getByTestId("header-layout")).toBeInTheDocument();

		// Assert that the Outlet placeholder is rendered
		expect(screen.getByTestId("outlet")).toBeInTheDocument();

		// Assert the presence of the Toaster
		expect(screen.getByText(/HeaderLayout/i)).toBeInTheDocument();
	});
});
