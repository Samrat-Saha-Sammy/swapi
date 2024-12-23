import { create } from "zustand";
import useCharacterStore from "../store-character";
import { extractLastParamFromURL } from "../../shared/utils";
import { getStarshipDetails } from "../../shared/services";
import { IStarshipStore } from "./types";

/**
 * Creates a Zustand store for managing starship data and interactions.
 * This store fetches, stores, and retrieves starship details.
 */
const useStarshipStore = create<IStarshipStore>((set, get) => ({
	/**
	 * A record of starship details indexed by starship ID.
	 * Each entry contains the full details of a starship.
	 */
	starships: {},

	/**
	 * Adds starship details to the store using the starship's unique ID.
	 *
	 * @param shipId - The unique ID of the starship to be added to the store.
	 * @param details - The starship details to be added to the store.
	 */
	_addStarshipById: (shipId, details) => {
		set((state) => ({
			starships: {
				...state.starships,
				[shipId]: { ...details },
			},
		}));
	},

	/**
	 * Retrieves starship details by starship ID.
	 * If the starship details are not available in the store, it fetches the details from an external service.
	 *
	 * @param shipId - The unique ID of the starship to fetch.
	 */
	getStarshipById: async (shipId) => {
		try {
			const starshipObj = get().starships[shipId];
			// If no records are available
			if (!starshipObj) {
				// Adding a request ID to prevent duplicate fetches
				const response = await getStarshipDetails(shipId);
				get()._addStarshipById(shipId, response.data);
			}
		} catch (error) {
			console.error(error);
		}
	},

	/**
	 * Retrieves starships associated with a character using the character's unique ID.
	 * The character’s starship URLs are used to fetch the corresponding starship details.
	 *
	 * @param cid - The unique ID of the character whose associated starships are to be fetched.
	 */
	getStarshipsByCharacterId: async (cid) => {
		const character = useCharacterStore.getState().characters[cid];

		if (character && character.starships) {
			character.starships.forEach((shipUrl) => {
				const shipId = extractLastParamFromURL(shipUrl);
				if (shipId) get().getStarshipById(shipId);
				else {
					// Unable to extract starship ID from URL
				}
			});
		} else {
			// No character found
		}
	},
}));

export default useStarshipStore;
