import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchBar from ".";
import useAppStore from "../../stores/store-app";

// Mocking the store
jest.mock("../../stores/store-app");

describe("SearchBar", () => {
	const mockSearchByName = jest.fn();
	const mockClearSearch = jest.fn();

	beforeEach(() => {
		useAppStore.setState({
			inSearchMode: false,
			isSearching: false,
			searchByName: mockSearchByName,
			clearSearch: mockClearSearch,
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("should render input field and search button", () => {
		render(<SearchBar />);

		const inputField = screen.getByPlaceholderText("Search characters...");
		const searchButton = screen.getByRole("button", { name: /search/i });

		expect(inputField).toBeInTheDocument();
		expect(searchButton).toBeInTheDocument();
	});

	test("should update search query on input change", () => {
		render(<SearchBar />);

		const inputField = screen.getByPlaceholderText(
			"Search characters..."
		) as HTMLInputElement;

		fireEvent.change(inputField, { target: { value: "Luke Skywalker" } });

		// Simulate typing and ensure the value is updated
		expect(inputField.value).toBe("Luke Skywalker");
	});

	test("should call searchByName when search button is clicked", async () => {
		render(<SearchBar />);

		const inputField = screen.getByPlaceholderText("Search characters...");
		const searchButton = screen.getByRole("button", { name: /search/i });

		fireEvent.change(inputField, { target: { value: "Luke Skywalker" } });

		fireEvent.click(searchButton);

		await waitFor(() => {
			expect(mockSearchByName).toHaveBeenCalledWith("Luke Skywalker");
		});
	});

	test("should not call searchByName when search button is clicked if isSearching is true", async () => {
		useAppStore.setState({ isSearching: true });

		render(<SearchBar />);

		const inputField = screen.getByPlaceholderText("Search characters...");
		const searchButton = screen.getByRole("button", { name: /search/i });

		fireEvent.change(inputField, { target: { value: "Luke Skywalker" } });
		fireEvent.click(searchButton);

		await waitFor(() => {
			expect(mockSearchByName).not.toHaveBeenCalled();
		});
	});

	test("should clear search query when clear button is clicked", () => {
		useAppStore.setState({ inSearchMode: true });

		render(<SearchBar />);

		const inputField = screen.getByPlaceholderText(
			"Search characters..."
		) as HTMLInputElement;
		const clearButton = screen.getByLabelText("Clear search");

		fireEvent.change(inputField, { target: { value: "Luke Skywalker" } });
		fireEvent.click(clearButton);

		expect(mockClearSearch).toHaveBeenCalled();
		expect(inputField.value).toBe("");
	});

	test("should disable search button when isSearching is true", () => {
		useAppStore.setState({ isSearching: true });
		render(<SearchBar />);

		const searchButton = screen.getByRole("button", { name: /search/i });
		expect(searchButton).toBeDisabled();
	});
});
