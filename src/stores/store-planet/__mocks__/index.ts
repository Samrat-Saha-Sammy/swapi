const mockStore = {
	planets: {
		"1": { name: "Tatooine" },
	},
	_addPlanetById: jest.fn(),
	getPlanetById: jest.fn(),
	getPlanetByCharacterId: jest.fn(),
};

const zustand = jest.requireActual("zustand");

export default zustand.create(() => mockStore);
