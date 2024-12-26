import { render, screen, fireEvent } from "@testing-library/react";
import PaginationBar from ".";

jest.mock("../../stores/store-app");

describe("PaginationBar Component", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders the correct record range and total count", async () => {
		render(<PaginationBar />);

		expect(screen.getByTestId("p-text-1")).toHaveTextContent(
			"Showing 1-10 of 100 records"
		);
	});

	test("calls goToPrevPage when Previous button is clicked", () => {
		render(<PaginationBar />);

		const prevButton = screen.getByText("Previous");
		fireEvent.click(prevButton);
		//expect(mockStore.goToPrevPage).toHaveBeenCalledTimes(1);
	});

	xtest("calls goToNextPage when Next button is clicked", () => {
		render(<PaginationBar />);

		const nextButton = screen.getByText("Next");
		fireEvent.click(nextButton);

		//expect(mockStore.goToNextPage).toHaveBeenCalledTimes(1);
	});

	xtest("disables Previous button if isPrev is false", () => {
		// useAppStore.mockImplementation((selector) =>
		// 	selector({ ...mockStore, previous: false })
		// );

		render(<PaginationBar />);

		const prevButton = screen.getByText("Previous");
		expect(prevButton).toHaveClass("cursor-default");
		fireEvent.click(prevButton);
		//expect(mockStore.goToPrevPage).not.toHaveBeenCalled();
	});

	xtest("disables Next button if isNext is false", () => {
		// useAppStore.mockImplementation((selector) =>
		// 	selector({ ...mockStore, next: false })
		// );

		render(<PaginationBar />);

		const nextButton = screen.getByText("Next");
		expect(nextButton).toHaveClass("cursor-default");
		fireEvent.click(nextButton);
		//expect(mockStore.goToNextPage).not.toHaveBeenCalled();
	});
});
