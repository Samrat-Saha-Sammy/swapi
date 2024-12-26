import { render, screen } from "@testing-library/react";
import HeaderLayout from ".";

describe("HeaderLayout Component", () => {
	it("renders the title and description", () => {
		render(<HeaderLayout />);

		// Check that the title is rendered
		expect(screen.getByText("Frontend Technical Activity")).toBeInTheDocument();

		// Check that the description is rendered
		expect(
			screen.getByText(
				"A comprehensive React-based frontend application using star wars API"
			)
		).toBeInTheDocument();
	});

	it("applies the correct CSS classes", () => {
		render(<HeaderLayout />);

		const headerElement = screen.getByRole("heading", {
			name: /frontend technical activity/i,
		});

		// Check the CSS classes for the title
		expect(headerElement).toHaveClass("text-3xl font-bold text-gray-800");

		const descriptionElement = screen.getByText(
			/a comprehensive react-based frontend application using star wars api/i
		);

		// Check the CSS classes for the description
		expect(descriptionElement).toHaveClass("text-gray-600");
	});
});
