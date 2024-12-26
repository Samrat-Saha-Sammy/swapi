import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ListPage from ".";
import useAppStore from "../../stores/store-app";

// Mock the app store
jest.mock("../../stores/store-app");

jest.mock("../../components/character-list", () => ({
	__esModule: true,
	default: () => <div>CharactersList</div>,
}));

jest.mock("../../components/search-bar", () => ({
	__esModule: true,
	default: () => <div>SearchBar</div>,
}));

jest.mock("../../components/pagination-bar", () => ({
	__esModule: true,
	default: () => <div>PaginationBar</div>,
}));

describe("ListPage", () => {
	let mockFetchDisplayBatchIds: () => {};

	beforeEach(() => {
		// Set up the mock function for fetchDisplayBatchIds
		mockFetchDisplayBatchIds = jest.fn();
		useAppStore.setState({
			fetchDisplayBatchIds: mockFetchDisplayBatchIds,
		});
	});

	test("renders SearchBar, CharactersList, and PaginationBar components", () => {
		render(
			<MemoryRouter>
				<ListPage />
			</MemoryRouter>
		);

		// Check if SearchBar is rendered
		expect(screen.getByText("SearchBar")).toBeInTheDocument();

		// Check if CharactersList is rendered
		expect(screen.getByText("CharactersList")).toBeInTheDocument();

		// Check if PaginationBar is rendered
		expect(screen.getByText("PaginationBar")).toBeInTheDocument();
	});

	test("calls fetchDisplayBatchIds on component mount", () => {
		render(
			<MemoryRouter>
				<ListPage />
			</MemoryRouter>
		);

		// Ensure that fetchDisplayBatchIds was called once when the component is mounted
		expect(mockFetchDisplayBatchIds).toHaveBeenCalledTimes(1);
	});
});
