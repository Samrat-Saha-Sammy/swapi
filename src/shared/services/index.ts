import axios, { AxiosResponse } from "axios";
import { API_FILM, API_PEOPLE, API_PLANET } from "./endpoints";
import { ICharacter, ICharacterList, IFilm, IPlanet } from "./types";

export const getCharacters = async (): Promise<
	AxiosResponse<ICharacterList>
> => {
	try {
		return await axios.get<ICharacterList>(`${API_PEOPLE}`);
	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
};

export const getCharacterDetails = async (
	cid: string
): Promise<AxiosResponse<ICharacter>> => {
	try {
		return await axios.get<ICharacter>(`${API_PEOPLE}/${cid}`);
	} catch (error) {
		console.error("Error fetching characters details:", error);
		throw error;
	}
};

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
