// App.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./app"; // Adjust the import if needed

// Mock the lazy-loaded components
jest.mock("../list-page", () => ({
	__esModule: true,
	default: () => <div>ListPage</div>,
}));

jest.mock("../details-page", () => ({
	__esModule: true,
	default: () => <div>DetailsPage</div>,
}));

jest.mock("../favourites-page", () => ({
	__esModule: true,
	default: () => <div>FavouritesPage</div>,
}));

jest.mock("../layouts/main-layout", () => ({
	__esModule: true,
	default: () => <div>MainLayout</div>,
}));

jest.mock("../404-page", () => ({
	__esModule: true,
	default: () => <div>NotFoundPage</div>,
}));

xdescribe("App Component", () => {
	xit("should render MainLayout and ListPage for the home route", async () => {
		render(
			<Router>
				<App />
			</Router>
		);

		// Check that the MainLayout component is rendered
		//
		await waitFor(() =>
			expect(screen.getByText("MainLayout")).toBeInTheDocument()
		);

		// Check that the ListPage is rendered as the default route
		await waitFor(() =>
			expect(screen.getByText("ListPage")).toBeInTheDocument()
		);
	});

	xit("should render DetailsPage for /details/:id route", async () => {
		window.history.pushState({}, "Test Details", "/details/1");

		render(
			<Router>
				<App />
			</Router>
		);

		// Wait for the lazy-loaded DetailsPage component
		await waitFor(() =>
			expect(screen.findByText("DetailsPage")).toBeInTheDocument()
		);
	});

	xit("should render FavouritesPage for /liked route", async () => {
		window.history.pushState({}, "Test Favourites", "/liked");

		render(
			<Router>
				<App />
			</Router>
		);

		// Wait for the lazy-loaded FavouritesPage component
		await waitFor(() =>
			expect(screen.findByText("FavouritesPage")).toBeInTheDocument()
		);
	});

	xit("should render NotFoundPage for an invalid route", async () => {
		window.history.pushState({}, "Test Not Found", "/invalid-route");

		render(
			<Router>
				<App />
			</Router>
		);

		// Check that the NotFoundPage is rendered
		expect(await screen.findByText("NotFoundPage")).toBeInTheDocument();
	});

	it("should show 'Loading...' while lazy-loaded components are loading", async () => {
		// Render App component and check if the fallback (Loading...) is shown during lazy load
		render(
			<Router>
				<App />
			</Router>
		);

		// Ensure that "Loading..." is displayed before the lazy-loaded components are rendered
		expect(screen.getByText("Loading...")).toBeInTheDocument();

		// After the lazy-loaded components are available, ensure their content appears
		await waitFor(() =>
			expect(screen.getByText("ListPage")).toBeInTheDocument()
		);
	});
});
