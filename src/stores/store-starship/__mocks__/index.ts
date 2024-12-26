const mockStore = {
	starships: {
		starship1: { name: "X-Wing Fighter", url: "starship1" },
	},
	getStarshipsByCharacterId: jest.fn(),
};

const zustand = jest.requireActual("zustand");

export default zustand.create(() => mockStore);
