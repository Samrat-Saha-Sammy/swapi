import { create } from "zustand";
import { IAppStore } from "./types";
import useCharacterStore from "../store-character";
import { getCharacters } from "../../shared/services";
import { extractLastParamFromURL } from "../../shared/utils";
import toast from "react-hot-toast";

const useAppStore = create<IAppStore>((set, get) => ({
	paginationSize: 10,
	pageCount: 1,
	isSearching: false,
	displayBatchIds: [],
	likeBatchIds: new Set<string>(),
	_setDisplayBatchIds: (newBatchIds) => {
		set({ displayBatchIds: newBatchIds });
	},
	fetchDisplayBatchIds: async () => {
		try {
			const response = await getCharacters();
			const newBatchIds: string[] = [];
			for (const key in response.data.results) {
				const row = response.data.results[key];
				const id = extractLastParamFromURL(row.url);

				if (id) {
					newBatchIds.push(id);
					useCharacterStore.getState()._addCharacterById(id, row);
				} else {
					// @TODO: Add Error notification
				}
			}

			get()._setDisplayBatchIds(newBatchIds);
		} catch (error) {
			//
		}
	},
	addToLikedList: (id) => {
		const newSet = new Set(get().likeBatchIds);
		newSet.add(id);
		set({ likeBatchIds: newSet });
		toast("Good Job! Added to your fav list", {
			icon: "🥰",
		});
	},
	removeFromLikedList: (id) => {
		const newSet = new Set(get().likeBatchIds);
		newSet.delete(id);
		set({ likeBatchIds: newSet });
		toast("Oops! Remove from your fav list", {
			icon: "💔",
		});
	},
}));

export default useAppStore;
