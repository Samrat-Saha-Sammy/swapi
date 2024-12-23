import { create } from "zustand";
import { IAppStore } from "./types";
import useCharacterStore from "../store-character";
import { getCharacters } from "../../shared/services";
import { extractLastParamFromURL } from "../../shared/utils";
import toast from "react-hot-toast";

const useAppStore = create<IAppStore>((set, get) => ({
	paginationSize: 10,
	pageCount: 1,
	totalCount: 0,
	next: null,
	previous: null,
	isSearching: false,
	isLoading: false,
	displayBatchIds: [],
	likeBatchIds: new Set<string>(),
	_setDisplayBatchIds: (newBatchIds) => {
		set({ displayBatchIds: newBatchIds });
	},
	fetchDisplayBatchIds: async (params) => {
		try {
			set(() => ({ isLoading: true }));
			const response = await getCharacters(params);
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
			set(() => ({ next: response.data.next }));
			set(() => ({ previous: response.data.previous }));
			set(() => ({ totalCount: response.data.count }));
			get()._setDisplayBatchIds(newBatchIds);
		} catch (error) {
			//
		} finally {
			set(() => ({ isLoading: false }));
		}
	},
	_disableBothPrevNext: () => {
		set(() => ({ next: null }));
		set(() => ({ previous: null }));
	},
	goToNextPage: async () => {
		get()._disableBothPrevNext();
		const nextPage = get().pageCount + 1;
		get().fetchDisplayBatchIds({ page: `${nextPage}` });
		set({ pageCount: nextPage });
	},
	goToPrevPage: async () => {
		get()._disableBothPrevNext();
		const prevPage = get().pageCount - 1;
		get().fetchDisplayBatchIds({ page: `${prevPage}` });
		set({ pageCount: prevPage });
	},
	addToLikedList: (id) => {
		const newSet = new Set(get().likeBatchIds);
		newSet.add(id);
		set({ likeBatchIds: newSet });
		toast("Nice! added to your fav list", {
			icon: "🥰",
		});
	},
	removeFromLikedList: (id) => {
		const newSet = new Set(get().likeBatchIds);
		newSet.delete(id);
		set({ likeBatchIds: newSet });
		toast("Oops! removed from your fav list", {
			icon: "💔",
		});
	},
}));

export default useAppStore;
