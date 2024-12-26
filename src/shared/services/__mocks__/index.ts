import { AxiosResponse } from "axios";
import {
	ICharacter,
	ICharacterList,
	IFilm,
	IPlanet,
	IStarship,
} from "../types";

// Mock data
const mockCharacter: ICharacter = {
	name: "Luke Skywalker",
	height: "172",
	mass: "77",
	hair_color: "blond",
	skin_color: "fair",
	eye_color: "blue",
	birth_year: "19BBY",
	gender: "male",
	homeworld: "https://example.com/api/planets/1/",
	films: ["https://example.com/api/films/1/"],
	species: ["https://example.com/api/species/1/"],
	vehicles: ["https://example.com/api/vehicles/14/"],
	starships: ["https://example.com/api/starships/12/"],
	created: "2014-12-09T13:50:51.644000Z",
	edited: "2014-12-20T21:17:56.891000Z",
	url: "https://example.com/api/people/1/",
};

const mockCharacterList: ICharacterList = {
	count: 1,
	next: null,
	previous: null,
	results: [{ ...mockCharacter }],
};

const mockPlanet: IPlanet = {
	name: "Tatooine",
	rotation_period: "23",
	orbital_period: "304",
	diameter: "10465",
	climate: "arid",
	gravity: "1 standard",
	terrain: "desert",
	surface_water: "1",
	population: "200000",
	residents: ["https://example.com/api/people/1/"],
	films: ["https://example.com/api/films/1/"],
	created: "2014-12-09T13:50:49.641000Z",
	edited: "2014-12-20T20:58:18.411000Z",
	url: "https://example.com/api/planets/1/",
};

const mockFilm: IFilm = {
	title: "A New Hope",
	episode_id: "string",
	opening_crawl:
		"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
	director: "George Lucas",
	producer: "Gary Kurtz, Rick McCallum",
	release_date: "1977-05-25",
	characters: ["https://example.com/api/people/1/"],
	planets: ["https://example.com/api/planets/1/"],
	starships: ["https://example.com/api/starships/2/"],
	vehicles: ["https://example.com/api/vehicles/4/"],
	species: ["https://example.com/api/species/1/"],
	created: "2014-12-10T14:23:31.880000Z",
	edited: "2014-12-20T19:49:45.256000Z",
	url: "https://example.com/api/films/1/",
};

const mockStarship: IStarship = {
	name: "CR90 corvette",
	model: "CR90 corvette",
	manufacturer: "Corellian Engineering Corporation",
	cost_in_credits: "3500000",
	length: "150",
	max_atmosphering_speed: "950",
	crew: "30-165",
	passengers: "600",
	cargo_capacity: "3000000",
	consumables: "1 year",
	hyperdrive_rating: "2.0",
	MGLT: "60",
	starship_class: "corvette",
	pilots: [],
	films: ["https://example.com/api/films/1/"],
	created: "2014-12-10T14:20:33.369000Z",
	edited: "2014-12-20T21:23:49.867000Z",
	url: "https://example.com/api/starships/2/",
};

// Mock functions
export const getCharacters = jest.fn(async () => {
	return {
		data: mockCharacterList,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	} as AxiosResponse<ICharacterList>;
});

export const getCharacterDetails = jest.fn(async () => {
	return {
		data: mockCharacter,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	} as AxiosResponse<ICharacter>;
});

export const getPlanetDetails = jest.fn(async () => {
	return {
		data: mockPlanet,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	} as AxiosResponse<IPlanet>;
});

export const getFilmDetails = jest.fn(async () => {
	return {
		data: mockFilm,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	} as AxiosResponse<IFilm>;
});

export const getStarshipDetails = jest.fn(async () => {
	return {
		data: mockStarship,
		status: 200,
		statusText: "OK",
		headers: {},
		config: {},
	} as AxiosResponse<IStarship>;
});
