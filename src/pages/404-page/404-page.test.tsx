import { render, screen } from "@testing-library/react";
import NotFoundPage from ".";

describe("NotFoundPage", () => {
	test("renders 404 error message", () => {
		render(<NotFoundPage />);

		// Check if 404 message is rendered
		const errorMessage = screen.getByText("404");
		expect(errorMessage).toBeInTheDocument();
	});

	test("renders 'Page not found' heading", () => {
		render(<NotFoundPage />);

		// Check if the 'Page not found' heading is rendered
		const heading = screen.getByText("Page not found");
		expect(heading).toBeInTheDocument();
	});

	test("renders 'Sorry, we couldn’t find the page you’re looking for.' text", () => {
		render(<NotFoundPage />);

		// Check if the description text is rendered
		const description = screen.getByText(
			"Sorry, we couldn’t find the page you’re looking for."
		);
		expect(description).toBeInTheDocument();
	});

	test("renders 'Go back home' button", () => {
		render(<NotFoundPage />);

		// Check if the 'Go back home' button is rendered
		const goBackButton = screen.getByRole("link", { name: /go back home/i });
		expect(goBackButton).toBeInTheDocument();
		expect(goBackButton).toHaveAttribute("href", "#");
	});
});
