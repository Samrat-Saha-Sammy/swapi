import { create } from "zustand";
import { IPlanetStore } from "./types";
import useCharacterStore from "../store-character";
import { getPlanetDetails } from "../../shared/services";

/**
 * Creates and manages a planet store using Zustand.
 * The store is responsible for managing planet data and provides methods to fetch and store planet details.
 */
const usePlanetStore = create<IPlanetStore>((set, get) => ({
	/**
	 * An object that stores planet details indexed by their unique planet IDs.
	 * Each planet's details include the complete information related to the specific planet.
	 */
	planets: {},

	/**
	 * A set used to track the planet IDs that are currently being fetched.
	 * This prevents multiple requests to fetch the same planet.
	 */
	_fetchList: new Set(),

	/**
	 * Adds planet details to the store using the planet's unique ID.
	 *
	 * @param planetId - The unique ID of the planet to be added to the store.
	 * @param details - The planet details to be added to the store.
	 */
	_addPlanetById: (planetId, details) => {
		set((state) => ({
			planets: {
				...state.planets,
				[planetId]: { ...details },
			},
		}));
		get()._fetchList.delete(planetId); // Remove from the fetch list after successful fetch
	},

	/**
	 * Retrieves planet details from the store or fetches the planet details if not already in the store.
	 * This method ensures that a planet's details are only fetched once by checking if the planet is already in the fetch list.
	 *
	 * @param planetId - The unique ID of the planet to fetch.
	 */
	getPlanetById: async (planetId) => {
		try {
			const planetObj = get().planets[planetId];
			// If the planet is not already in the store and is not being fetched
			if (!planetObj && !get()._fetchList.has(planetId)) {
				get()._fetchList.add(planetId); // Add the planet ID to the fetch list to prevent duplicate requests
				// Fetch planet details from the API
				const response = await getPlanetDetails(planetId);
				get()._addPlanetById(planetId, response.data); // Store the planet details
			}
		} catch (error) {
			console.error(error); // Log any error during the fetch process
		}
	},

	/**
	 * Retrieves the planet associated with a character using the character's unique ID.
	 * The character's planet ID is used to fetch the associated planet details.
	 *
	 * @param cid - The unique ID of the character whose associated planet is to be fetched.
	 */
	getPlanetByCharacterId: async (cid) => {
		const character = useCharacterStore.getState().characters[cid];

		if (character && character.planetId) {
			get().getPlanetById(character.planetId); // Fetch the planet using the character's planet ID
		} else {
			// Handle the case where no character or planet ID is found
		}
	},
}));

export default usePlanetStore;
