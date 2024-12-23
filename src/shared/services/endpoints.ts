// Get the base API URL from the environment variables
const API_BASE_URL = process.env.VITE_API_URL;

/**
 * The API_PEOPLE constant holds the URL endpoint for retrieving data about people.
 * It concatenates the base API URL with the "/people" path.
 */
export const API_PEOPLE = API_BASE_URL + "/people";

/**
 * The API_PLANET constant holds the URL endpoint for retrieving data about planets.
 * It concatenates the base API URL with the "/planets" path.
 */
export const API_PLANET = API_BASE_URL + "/planets";

/**
 * The API_FILM constant holds the URL endpoint for retrieving data about films.
 * It concatenates the base API URL with the "/films" path.
 */
export const API_FILM = API_BASE_URL + "/films";

/**
 * The API_STARSHIP constant holds the URL endpoint for retrieving data about starships.
 * It concatenates the base API URL with the "/starships" path.
 */
export const API_STARSHIP = API_BASE_URL + "/starships";
