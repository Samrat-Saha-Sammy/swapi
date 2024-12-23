import axios, { AxiosResponse } from "axios";
import { API_FILM, API_PEOPLE, API_PLANET, API_STARSHIP } from "./endpoints";
import { ICharacter, ICharacterList, IFilm, IPlanet, IStarship } from "./types";

/**
 * Fetches a list of characters from the API.
 *
 * @param {Record<string, string>} [params={}] - Optional query parameters to filter the character list.
 * @returns {Promise<AxiosResponse<ICharacterList>>} A promise that resolves to the response containing the list of characters.
 */
export const getCharacters = async (
	params: Record<string, string> = {}
): Promise<AxiosResponse<ICharacterList>> => {
	try {
		return await axios.get<ICharacterList>(`${API_PEOPLE}`, { params: params });
	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
};

/**
 * Fetches the details of a specific character from the API.
 *
 * @param {string} cid - The unique identifier of the character.
 * @returns {Promise<AxiosResponse<ICharacter>>} A promise that resolves to the response containing the character details.
 */
export const getCharacterDetails = async (
	cid: string
): Promise<AxiosResponse<ICharacter>> => {
	try {
		return await axios.get<ICharacter>(`${API_PEOPLE}/${cid}`);
	} catch (error) {
		console.error("Error fetching character details:", error);
		throw error;
	}
};

/**
 * Fetches the details of a specific planet from the API.
 *
 * @param {string} planetId - The unique identifier of the planet.
 * @returns {Promise<AxiosResponse<IPlanet>>} A promise that resolves to the response containing the planet details.
 */
export const getPlanetDetails = async (
	planetId: string
): Promise<AxiosResponse<IPlanet>> => {
	try {
		return await axios.get<IPlanet>(`${API_PLANET}/${planetId}`);
	} catch (error) {
		console.error("Error fetching planet details:", error);
		throw error;
	}
};

/**
 * Fetches the details of a specific film from the API.
 *
 * @param {string} filmId - The unique identifier of the film.
 * @returns {Promise<AxiosResponse<IFilm>>} A promise that resolves to the response containing the film details.
 */
export const getFilmDetails = async (
	filmId: string
): Promise<AxiosResponse<IFilm>> => {
	try {
		return await axios.get<IFilm>(`${API_FILM}/${filmId}`);
	} catch (error) {
		console.error("Error fetching film details:", error);
		throw error;
	}
};

/**
 * Fetches the details of a specific starship from the API.
 *
 * @param {string} shipId - The unique identifier of the starship.
 * @returns {Promise<AxiosResponse<IStarship>>} A promise that resolves to the response containing the starship details.
 */
export const getStarshipDetails = async (
	shipId: string
): Promise<AxiosResponse<IStarship>> => {
	try {
		return await axios.get<IStarship>(`${API_STARSHIP}/${shipId}`);
	} catch (error) {
		console.error("Error fetching starship details:", error);
		throw error;
	}
};
