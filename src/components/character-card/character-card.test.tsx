import { render, screen, fireEvent } from "@testing-library/react";
import CharacterCard from ".";

jest.mock("../../stores/store-character");
jest.mock("../../stores/store-planet");

describe("CharacterCard Component", () => {
	const mockHandleClick = jest.fn();

	afterEach(() => {
		jest.clearAllMocks();
	});

	test("renders character name and planet correctly", async () => {
		render(
			<CharacterCard
				cid="1"
				handleClick={mockHandleClick}
				btnText="View Details"
			/>
		);

		expect(screen.getByRole("listitem")).toBeInTheDocument();
		expect(screen.getByText("John Doe")).toBeInTheDocument();
		expect(screen.getByText(/Gender: Male/)).toBeInTheDocument();
		expect(screen.getByText(/Home Planet: Tatooine/)).toBeInTheDocument();
	});

	test("calls handleClick with correct ID when button is clicked", () => {
		render(
			<CharacterCard
				cid="1"
				handleClick={mockHandleClick}
				btnText="View Details"
			/>
		);

		const button = screen.getByRole("button", {
			name: /view details/i,
		});

		expect(button).toBeInTheDocument();
		fireEvent.click(button);
		expect(mockHandleClick).toHaveBeenCalledTimes(1);
		expect(mockHandleClick).toHaveBeenCalledWith("1");
	});
});
