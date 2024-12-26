import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import CharacterDetailCard from ".";
import useAppStore from "../../stores/store-app";
import useCharacterStore from "../../stores/store-character";

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

		// Check if the "Gender: Male" text is present in the component
		expect(screen.getByTestId("gender")).toHaveTextContent("Gender: Male");

		// Check if the "Hair Color: Blond" text is present in the component
		expect(screen.getByTestId("hair_color")).toHaveTextContent(
			"Hair Color: Blond"
		);

		// Check if the "Eye Color: Blue" text is present in the component
		expect(screen.getByTestId("eye_color")).toHaveTextContent(
			"Eye Color: Blue"
		);

		// Check if the "Planet Name: Tatooine" text is present in the component
		expect(screen.getByTestId("planet_name")).toHaveTextContent(
			"Planet Name: Tatooine"
		);

		expect(screen.getByText("Films Appeared In")).toBeInTheDocument();
		expect(screen.getByText("A New Hope")).toBeInTheDocument();
		expect(screen.getByText("The Empire Strikes Back")).toBeInTheDocument();
		expect(screen.getByText("Starships Driven")).toBeInTheDocument();
		expect(screen.getByText("X-Wing Fighter")).toBeInTheDocument();
	});

	test("handles like button click to like", () => {
		//export default useCharacterStore;
		const addToLikedList = jest.fn();

		useAppStore.setState({
			addToLikedList,
		});

		render(<CharacterDetailCard cid="1" />);

		// Wait for character data to be loaded

		expect(screen.getByText("John Doe")).toBeInTheDocument();

		const likeButton = screen.getByRole("button");

		// Initial state: not liked
		expect(likeButton).toHaveClass("bg-gray-400");

		// Click the like button
		fireEvent.click(likeButton);

		expect(addToLikedList).toHaveBeenCalledWith("1");
	});

	test("handles like button click to dislike like", () => {
		//export default useCharacterStore;
		const removeFromLikedList = jest.fn();

		useAppStore.setState({
			likeBatchIds: new Set(["1"]),
			removeFromLikedList,
		});

		render(<CharacterDetailCard cid="1" />);

		const likeButton = screen.getByRole("button");

		// Initial state: liked
		expect(likeButton).toHaveClass("bg-red-500");

		// Click the like button again (to remove from liked list)
		fireEvent.click(likeButton);
		expect(removeFromLikedList).toHaveBeenCalledWith("1");
	});

	test("should render no films on empty list", () => {
		const objectOnId = useCharacterStore.getState().characters["1"];
		useCharacterStore.setState({
			characters: {
				"1": { ...objectOnId, films: [] },
			},
		});

		render(<CharacterDetailCard cid="1" />);

		const notFoundText = screen.getByText("No Films");
		expect(notFoundText).toBeInTheDocument();
		expect(notFoundText).toHaveClass("text-red-400");
	});

	test("should render null if film url is missing ", () => {
		const objectOnId = useCharacterStore.getState().characters["1"];
		useCharacterStore.setState({
			characters: {
				"1": { ...objectOnId, films: ["unknown"] },
			},
		});

		render(<CharacterDetailCard cid="1" />);

		expect(screen.getByTestId("films")).toBeEmptyDOMElement();
	});

	test("should render null if starship url is missing ", () => {
		const objectOnId = useCharacterStore.getState().characters["1"];
		useCharacterStore.setState({
			characters: {
				"1": { ...objectOnId, starships: ["unknown"] },
			},
		});

		render(<CharacterDetailCard cid="1" />);

		expect(screen.getByTestId("starships")).toBeEmptyDOMElement();
	});

	test("should render no starships on empty list", () => {
		const objectOnId = useCharacterStore.getState().characters["1"];
		useCharacterStore.setState({
			characters: {
				"1": { ...objectOnId, starships: [] },
			},
		});

		render(<CharacterDetailCard cid="1" />);

		const notFoundText = screen.getByText("No Starships");
		expect(notFoundText).toBeInTheDocument();
		expect(notFoundText).toHaveClass("text-red-400");
	});
});
