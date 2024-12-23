import { create } from "zustand";
import { IFilmStore } from "./types";
import useCharacterStore from "../store-character";
import { extractLastParamFromURL } from "../../shared/utils";
import { getFilmDetails } from "../../shared/services";

/**
 * A Zustand store for managing film details in the application.
 * This store is used to fetch and store details of films related to characters and films by their IDs.
 */
const useFilmStore = create<IFilmStore>((set, get) => ({
	/**
	 * An object that stores films by their unique film ID.
	 * The film data includes all details related to the specific film.
	 */
	films: {},

	/**
	 * Adds film details to the store using the film's unique ID.
	 *
	 * @param filmId - The unique ID of the film to be added.
	 * @param details - The film details to be added to the store.
	 */
	_addFilmById: (filmId, details) => {
		set((state) => ({
			films: {
				...state.films,
				[filmId]: { ...details },
			},
		}));
	},

	/**
	 * Retrieves film details by the unique film ID and stores them in the store.
	 * If the film is not found in the store, it fetches the film details from the service.
	 *
	 * @param filmId - The unique ID of the film to fetch.
	 */
	getFilmById: async (filmId) => {
		try {
			const filmObj = get().films[filmId];
			// If no film record is available
			if (!filmObj) {
				// Fetch the film details from the service
				const response = await getFilmDetails(filmId);
				get()._addFilmById(filmId, response.data);
			}
		} catch (error) {
			console.error("Error fetching film details:", error);
		}
	},

	/**
	 * Retrieves and stores all films associated with a character by their unique character ID.
	 * It checks the films property of the character and fetches each film's details using the film ID.
	 *
	 * @param cid - The unique ID of the character to get films for.
	 */
	getFilmsByCharacterId: async (cid) => {
		const character = useCharacterStore.getState().characters[cid];

		if (character && character.films) {
			character.films.forEach((filmUrl) => {
				const filmId = extractLastParamFromURL(filmUrl);
				if (filmId) get().getFilmById(filmId);
				else {
					console.warn("Unable to extract film ID from film URL.");
				}
			});
		} else {
			console.warn("No character found or character has no films.");
		}
	},
}));

export default useFilmStore;
