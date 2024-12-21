import { create } from "zustand";
import { getCharacters } from "../../services";
import { IAppStore } from "./types";
import { extractLastParamFromURL } from "../../utils";
import useCharacterStore from "../store-character";

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
        let id = extractLastParamFromURL(row.url);

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
}));

export default useAppStore;
