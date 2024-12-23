import { create } from "zustand";
import { IAppStore } from "./types";
import useCharacterStore from "../store-character";
import { getCharacters } from "../../shared/services";
import { extractLastParamFromURL } from "../../shared/utils";
import toast from "react-hot-toast";

/**
 * Zustand store for managing application state related to character data, pagination, and liked characters.
 * The store includes state for pagination, loading status, liked characters, and utility methods for updating the state.
 */
const useAppStore = create<IAppStore>((set, get) => ({
	/**
	 * The number of characters displayed per page.
	 */
	paginationSize: 10,

	/**
	 * The current page number.
	 */
	pageCount: 1,

	/**
	 * The total number of characters available.
	 */
	totalCount: 0,

	/**
	 * The URL for the next page of results.
	 */
	next: null,

	/**
	 * The URL for the previous page of results.
	 */
	previous: null,

	/**
	 * Flag indicating whether a search operation is in progress.
	 */
	isSearching: false,

	/**
	 * Flag indicating whether data is being loaded.
	 */
	isLoading: false,

	/**
	 * The list of character IDs to display on the current page.
	 */
	displayBatchIds: [],

	/**
	 * Set of character IDs that are marked as liked.
	 */
	likeBatchIds: new Set<string>(),

	/**
	 * Updates the list of character IDs to display.
	 *
	 * @param newBatchIds - The new list of character IDs.
	 */
	_setDisplayBatchIds: (newBatchIds) => {
		set({ displayBatchIds: newBatchIds });
	},

	/**
	 * Fetches the character data for the current page and updates the state.
	 *
	 * @param params - The query parameters to be sent to the API.
	 */
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
					useCharacterStore.getState()._addCharacterById(id, row); // Store character by ID
				} else {
					// @TODO: Add Error notification for invalid URL
				}
			}
			set(() => ({ next: response.data.next }));
			set(() => ({ previous: response.data.previous }));
			set(() => ({ totalCount: response.data.count }));
			get()._setDisplayBatchIds(newBatchIds);
		} catch (error) {
			// Handle errors (optional logging or notification)
		} finally {
			set(() => ({ isLoading: false }));
		}
	},

	/**
	 * Disables both the "previous" and "next" pagination buttons.
	 */
	_disableBothPrevNext: () => {
		set(() => ({ next: null }));
		set(() => ({ previous: null }));
	},

	/**
	 * Moves to the next page by incrementing the page count and fetching the next set of character data.
	 */
	goToNextPage: async () => {
		get()._disableBothPrevNext();
		const nextPage = get().pageCount + 1;
		get().fetchDisplayBatchIds({ page: `${nextPage}` });
		set({ pageCount: nextPage });
	},

	/**
	 * Moves to the previous page by decrementing the page count and fetching the previous set of character data.
	 */
	goToPrevPage: async () => {
		get()._disableBothPrevNext();
		const prevPage = get().pageCount - 1;
		get().fetchDisplayBatchIds({ page: `${prevPage}` });
		set({ pageCount: prevPage });
	},

	/**
	 * Adds a character ID to the list of liked characters and displays a success toast.
	 *
	 * @param id - The character ID to be added to the liked list.
	 */
	addToLikedList: (id) => {
		const newSet = new Set(get().likeBatchIds);
		newSet.add(id);
		set({ likeBatchIds: newSet });
		toast("Nice! added to your fav list", {
			icon: "🥰",
		});
	},

	/**
	 * Removes a character ID from the list of liked characters and displays a removal toast.
	 *
	 * @param id - The character ID to be removed from the liked list.
	 */
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
