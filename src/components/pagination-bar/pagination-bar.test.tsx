import { render, screen, fireEvent } from "@testing-library/react";
import PaginationBar from ".";
import useAppStore from "../../stores/store-app";

jest.mock("../../stores/store-app");

describe("PaginationBar Component", () => {
	const mockGoToNextPage = jest.fn();
	const mockGoToPrevPage = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders the correct record range and total count", async () => {
		useAppStore.setState({ goToNextPage: mockGoToNextPage });
		useAppStore.setState({ goToPrevPage: mockGoToPrevPage });

		render(<PaginationBar />);

		expect(screen.getByTestId("p-text-1")).toHaveTextContent(
			"Showing 1-10 of 100 records"
		);
	});

	test("calls goToPrevPage when Previous button is clicked", () => {
		render(<PaginationBar />);

		const prevButton = screen.getByText("Previous");
		fireEvent.click(prevButton);
		expect(mockGoToPrevPage).toHaveBeenCalledTimes(1);
	});

	test("calls goToNextPage when Next button is clicked", () => {
		render(<PaginationBar />);

		const nextButton = screen.getByText("Next");
		fireEvent.click(nextButton);

		expect(mockGoToNextPage).toHaveBeenCalledTimes(1);
	});

	test("disables Previous button if isPrev is false", () => {
		useAppStore.setState({ previous: null });

		render(<PaginationBar />);

		const prevButton = screen.getByText("Previous");
		expect(prevButton).toHaveClass("cursor-default");
		fireEvent.click(prevButton);
		expect(mockGoToPrevPage).not.toHaveBeenCalled();
	});

	test("disables Next button if isNext is false", () => {
		useAppStore.setState({ next: null });

		render(<PaginationBar />);

		const nextButton = screen.getByText("Next");
		expect(nextButton).toHaveClass("cursor-default");
		fireEvent.click(nextButton);
		expect(mockGoToNextPage).not.toHaveBeenCalled();
	});

	test("do not render if in search more", async () => {
		useAppStore.setState({ inSearchMode: true });

		render(<PaginationBar />);

		// Assert that the PaginationBar is not rendered
		// The text we expect to be present in PaginationBar
		expect(screen.queryByText(/Showing/)).toBeNull(); // Should be null if not rendered
	});

	test("do not render if total count is zero", async () => {
		useAppStore.setState({ inSearchMode: false });
		useAppStore.setState({ totalCount: 0 });

		render(<PaginationBar />);

		// Assert that the PaginationBar is not rendered
		// The text we expect to be present in PaginationBar
		expect(screen.queryByText(/Showing/)).toBeNull(); // Should be null if not rendered
	});
});
