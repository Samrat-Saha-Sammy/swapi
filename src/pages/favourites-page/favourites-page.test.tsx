import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FavouritesPage from ".";
import useAppStore from "../../stores/store-app";

// Mock the app store and the method to remove from the liked list
jest.mock("../../stores/store-app");

jest.mock("../../components/character-card", () => ({
	__esModule: true,
	default: () => <div>CharacterCard</div>,
}));

describe("FavouritesPage", () => {
	test("renders CharacterCard components when there are liked characters", () => {
		useAppStore.setState({
			likeBatchIds: new Set(["1", "2", "3"]),
		});

		render(
			<MemoryRouter>
				<FavouritesPage />
			</MemoryRouter>
		);

		// Check if CharacterCard components are rendered for each liked character
		expect(screen.getAllByText(`CharacterCard`)).toHaveLength(3);
	});

	test("renders 'Oops! fav list is empty' when no liked characters", () => {
		useAppStore.setState({
			likeBatchIds: new Set(),
		});

		render(
			<MemoryRouter>
				<FavouritesPage />
			</MemoryRouter>
		);

		// Check if the empty message is displayed
		expect(screen.getByText("Oops! fav list is empty")).toBeInTheDocument();
	});
});
