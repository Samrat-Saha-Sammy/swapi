import { render, screen } from "@testing-library/react";
import CharactersList from ".";

// Mock the useAppStore hook
jest.mock("../../stores/store-app");

// Mock useNavigate from react-router-dom
jest.mock("react-router-dom", () => ({
	useNavigate: jest.fn(),
}));

describe("CharactersList", () => {
	test("renders a single CharacterCard component", () => {
		render(<CharactersList />);

		// Verify that the CharacterCard component is rendered
		const characterCards = screen.getAllByRole("listitem");
		expect(characterCards).toHaveLength(1);
	});
});
