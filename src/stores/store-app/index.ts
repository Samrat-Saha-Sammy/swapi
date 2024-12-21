import { create } from "zustand";
import { getCharacters } from "../../services";
import { IAppStore } from "./types";

const useAppStore = create<IAppStore>((set, get) => ({
  paginationSize: 10,
  pageCount: 1,
  isSearching: false,
  displayBatchIds: [],

  _setDisplayBatchIds: (newBatchIds) => {
    set({ displayBatchIds: newBatchIds });
  },
  fetchDisplayBatchIds: async () => {
    try {
      const response = await getCharacters();
      const newBatchIds: string[] = [];
      for (let key in response.data.results) {
        let row = response.data.results[key];
        newBatchIds.push(row.uid);
      }

      get()._setDisplayBatchIds(newBatchIds);
    } catch (error) {
      //
    }
  },
}));

export default useAppStore;
