import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailsPage from ".";
import CharacterDetailCard from "../../components/character-detail-card";

jest.mock("../../components/character-detail-card", () => {
	return jest.fn(() => <div>Mocked Character Detail Card</div>);
});

describe("DetailsPage", () => {
	test("renders CharacterDetailCard with the correct cid when id is provided", () => {
		const mockId = "123"; // Example character ID

		render(
			<MemoryRouter initialEntries={[`/details/${mockId}`]}>
				<Routes>
					<Route path="/details/:id" element={<DetailsPage />} />
				</Routes>
			</MemoryRouter>
		);

		// Check if CharacterDetailCard is rendered with the correct cid
		expect(
			screen.getByText("Mocked Character Detail Card")
		).toBeInTheDocument();
		expect(CharacterDetailCard).toHaveBeenCalledWith(
			{ cid: mockId },
			expect.anything()
		);
	});

	test("does not render CharacterDetailCard when id is not present in the URL", () => {
		render(
			<MemoryRouter initialEntries={["/details/"]}>
				<Routes>
					<Route path="/details/:id" element={<DetailsPage />} />
				</Routes>
			</MemoryRouter>
		);

		// Ensure that CharacterDetailCard is not rendered when no `id` is present
		expect(screen.queryByText("Mocked Character Detail Card")).toBeNull();
	});
});
