import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CharacterDetailCard from ".";

jest.mock("../../stores/store-character");
jest.mock("../../stores/store-planet");
jest.mock("../../stores/store-film");
jest.mock("../../stores/store-starship");

describe("CharacterDetailCard", () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders character details correctly", async () => {
		render(<CharacterDetailCard cid="1" />);

		// Wait for character data to be loaded
		await waitFor(() =>
			expect(screen.getByText("John Doe")).toBeInTheDocument()
		);

		// Check if character details are displayed

		// Check if the "Gender: Male" text is present in the component
		// Assert that both parts of the text are present
		expect(screen.getByText("Gender:")).toBeInTheDocument();
		expect(screen.getByText("Male")).toBeInTheDocument();

		// Check if the "Hair Color: Blond" text is present in the component
		// Assert that both parts of the text are present
		expect(screen.getByText("Hair Color:")).toBeInTheDocument();
		expect(screen.getByText("Blond")).toBeInTheDocument();

		// Check if the "Eye Color: Blue" text is present in the component
		// Assert that both parts of the text are present
		expect(screen.getByText("Eye Color:")).toBeInTheDocument();
		expect(screen.getByText("Blue")).toBeInTheDocument();

		// Check if the "Planet Name: Tatooine" text is present in the component
		// Assert that both parts of the text are present
		expect(screen.getByText("Planet Name:")).toBeInTheDocument();
		expect(screen.getByText("Tatooine")).toBeInTheDocument();

		expect(screen.getByText("Films Appeared In")).toBeInTheDocument();
		expect(screen.getByText("A New Hope")).toBeInTheDocument();
		expect(screen.getByText("The Empire Strikes Back")).toBeInTheDocument();
		expect(screen.getByText("Starships Driven")).toBeInTheDocument();
		expect(screen.getByText("X-Wing Fighter")).toBeInTheDocument();
	});

	test("handles like button click", async () => {
		//export default useCharacterStore;
		const addToLikedList = jest.fn();
		const removeFromLikedList = jest.fn();
		jest.mock("../../stores/store-app", () => {
			const mockStore = {
				likeBatchIds: new Set(),
				addToLikedList,
				removeFromLikedList,
			};

			const zustand = jest.requireActual("zustand");

			return {
				_esModule: true,
				default: zustand.create(() => mockStore),
			};
		});

		render(<CharacterDetailCard cid="1" />);

		// Wait for character data to be loaded
		await waitFor(() =>
			expect(screen.getByText("John Doe")).toBeInTheDocument()
		);

		const likeButton = screen.getByRole("button");

		// Initial state: not liked
		expect(likeButton).toHaveClass("bg-gray-400");

		// Click the like button
		fireEvent.click(likeButton);

		// expect(addToLikedList).toHaveBeenCalledWith("1");

		// After clicking: liked
		//expect(likeButton).toHaveClass("bg-red-500");

		// // Click the like button again (to remove from liked list)
		// fireEvent.click(likeButton);
		// expect(removeFromLikedList).toHaveBeenCalledWith("1");

		// // After removing: not liked
		// expect(likeButton).toHaveClass("bg-gray-400");
	});
});
