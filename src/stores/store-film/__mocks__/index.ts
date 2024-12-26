const mockStore = {
	films: {
		film1: { title: "A New Hope", url: "film1" },
		film2: { title: "The Empire Strikes Back", url: "film2" },
	},
	getFilmsByCharacterId: jest.fn(),
};

const zustand = jest.requireActual("zustand");

export default zustand.create(() => mockStore);
