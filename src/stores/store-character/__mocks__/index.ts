const mockStore = {
	characters: {
		"1": {
			name: "John Doe",
			gender: "Male",
			hair_color: "Blond",
			eye_color: "Blue",
			planetId: "1",
			films: ["film1", "film2"],
			starships: ["starship1"],
		},
	},
	getCharacterById: jest.fn(),
};

const zustand = jest.requireActual("zustand");

export default zustand.create(() => mockStore);
