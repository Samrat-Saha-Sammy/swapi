import { create } from "zustand";
import { ICharacterStore } from "./types";
import { getCharacterDetails } from "../../shared/services";
import { extractLastParamFromURL } from "../../shared/utils";

/**
 * A Zustand store that manages character data.
 * This store handles the retrieval and storage of character details by their ID.
 */
const useCharacterStore = create<ICharacterStore>((set, get) => ({
	/**
	 * An object that stores character details by their unique ID.
	 * Each entry contains character information and the associated planet ID.
	 */
	characters: {},

	/**
	 * Adds character details to the store by their ID.
	 * This method also extracts and stores the planet ID from the character's homeworld URL.
	 *
	 * @param cid - The unique ID of the character.
	 * @param details - The details of the character to be added to the store.
	 */
	_addCharacterById: (cid, details) => {
		const planetId = extractLastParamFromURL(details.homeworld);

		if (planetId) {
			// Updates the store with the new character data, including the planet ID
			set((state) => ({
				characters: {
					...state.characters,
					[cid]: { ...details, planetId: planetId },
				},
			}));
		} else {
			// Error: Unable to parse the planet ID from the homeworld URL
			// @TODO: Handle this error case (e.g., show an error toast)
		}
	},

	/**
	 * Retrieves the character details by their ID.
	 * If the character details are not in the store, it fetches the data from the API.
	 *
	 * @param cid - The unique ID of the character to fetch.
	 * @returns A promise that resolves when the character details are fetched and stored.
	 */
	getCharacterById: async (cid: string) => {
		const characterObj = get().characters[cid];
		// If the character is not already in the store
		if (!characterObj) {
			try {
				// Fetch the character details from the API
				const response = await getCharacterDetails(cid);
				// Add the fetched character details to the store
				get()._addCharacterById(cid, response.data);
			} catch (error) {
				// Handle error (e.g., log the error or display a message)
				console.error("Error fetching character details", error);
			}
		}
	},
}));

export default useCharacterStore;
