import { create } from "zustand";
import useCharacterStore from "../store-character";
import { extractLastParamFromURL } from "../../shared/utils";
import { getStarshipDetails } from "../../shared/services";
import { IStarshipStore } from "./types";

const useStarshipStore = create<IStarshipStore>((set, get) => ({
	starships: {},
	_addStarshipById: (shipId, details) => {
		set((state) => ({
			starships: {
				...state.starships,
				[shipId]: { ...details },
			},
		}));
	},
	getStarshipById: async (shipId) => {
		try {
			const planetObj = get().starships[shipId];
			// If no records is available
			if (!planetObj) {
				// Adding a id to discard repeat next request
				const response = await getStarshipDetails(shipId);
				get()._addStarshipById(shipId, response.data);
			}
		} catch (error) {
			console.error(error);
		}
	},
	getStarshipsByCharacterId: async (cid) => {
		const character = useCharacterStore.getState().characters[cid];

		if (character && character.films) {
			character.starships.forEach((shipUrl) => {
				const shipId = extractLastParamFromURL(shipUrl);
				if (shipId) get().getStarshipById(shipId);
				else {
					// Unable to extract film id from film URL
				}
			});
		} else {
			// No Character found
		}
	},
}));

export default useStarshipStore;
