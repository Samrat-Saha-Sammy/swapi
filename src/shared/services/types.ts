/**
 * Interface representing a character in the Star Wars universe.
 */
export interface ICharacter {
	/** The name of the character */
	name: string;

	/** The height of the character in centimeters */
	height: string;

	/** The mass of the character in kilograms */
	mass: string;

	/** The hair color of the character */
	hair_color: string;

	/** The skin color of the character */
	skin_color: string;

	/** The eye color of the character */
	eye_color: string;

	/** The birth year of the character */
	birth_year: string;

	/** The gender of the character */
	gender: string;

	/** The URL of the character's homeworld */
	homeworld: string;

	/** The list of films the character appeared in */
	films: string[];

	/** The species the character belongs to */
	species: string[];

	/** The list of vehicles associated with the character */
	vehicles: string[];

	/** The list of starships associated with the character */
	starships: string[];

	/** The date the character was created */
	created: string;

	/** The date the character was last edited */
	edited: string;

	/** The URL of the character's API resource */
	url: string;
}

/**
 * Interface representing a paginated list of characters.
 */
export interface ICharacterList {
	/** The total number of characters available */
	count: number;

	/** The URL of the previous page of characters, or null if there is no previous page */
	previous: null | string;

	/** The URL of the next page of characters, or null if there is no next page */
	next: null | string;

	/** The list of characters on the current page */
	results: ICharacter[];
}

/**
 * Interface representing a planet in the Star Wars universe.
 */
export interface IPlanet {
	/** The name of the planet */
	name: string;

	/** The planet's rotation period in hours */
	rotation_period: string;

	/** The planet's orbital period in days */
	orbital_period: string;

	/** The diameter of the planet in kilometers */
	diameter: string;

	/** The climate of the planet */
	climate: string;

	/** The gravity of the planet */
	gravity: string;

	/** The terrain of the planet */
	terrain: string;

	/** The amount of surface water on the planet */
	surface_water: string;

	/** The population of the planet */
	population: string;

	/** The list of residents on the planet */
	residents: string[];

	/** The list of films where the planet appeared */
	films: string[];

	/** The date the planet was created */
	created: string;

	/** The date the planet was last edited */
	edited: string;

	/** The URL of the planet's API resource */
	url: string;
}

/**
 * Interface representing a film in the Star Wars universe.
 */
export interface IFilm {
	/** The title of the film */
	title: string;

	/** The episode number of the film */
	episode_id: string;

	/** The opening crawl text of the film */
	opening_crawl: string;

	/** The director of the film */
	director: string;

	/** The producer of the film */
	producer: string;

	/** The release date of the film */
	release_date: string;

	/** The list of characters appearing in the film */
	characters: string[];

	/** The list of planets appearing in the film */
	planets: string[];

	/** The list of starships appearing in the film */
	starships: string[];

	/** The list of vehicles appearing in the film */
	vehicles: string[];

	/** The list of species appearing in the film */
	species: string[];

	/** The date the film was created */
	created: string;

	/** The date the film was last edited */
	edited: string;

	/** The URL of the film's API resource */
	url: string;
}

/**
 * Interface representing a starship in the Star Wars universe.
 */
export interface IStarship {
	/** The name of the starship */
	name: string;

	/** The model of the starship */
	model: string;

	/** The manufacturer of the starship */
	manufacturer: string;

	/** The cost of the starship in credits */
	cost_in_credits: string;

	/** The length of the starship in meters */
	length: string;

	/** The maximum atmospheric speed of the starship */
	max_atmosphering_speed: string;

	/** The number of crew members required to operate the starship */
	crew: string;

	/** The number of passengers the starship can carry */
	passengers: string;

	/** The cargo capacity of the starship in kilograms */
	cargo_capacity: string;

	/** The consumables for the starship (e.g., food, water) in days */
	consumables: string;

	/** The starship's hyperdrive rating */
	hyperdrive_rating: string;

	/** The MGLT rating for the starship */
	MGLT: string;

	/** The class of the starship */
	starship_class: string;

	/** The list of pilots of the starship */
	pilots: string[];

	/** The list of films in which the starship appeared */
	films: string[];

	/** The date the starship was created */
	created: string;

	/** The date the starship was last edited */
	edited: string;

	/** The URL of the starship's API resource */
	url: string;
}
