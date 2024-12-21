import { create } from "zustand";
import { ICharacterStore } from "./types";
import { getCharacterDetails } from "../../services";
import { extractLastParamFromURL } from "../../utils";

const useCharacterStore = create<ICharacterStore>((set, get) => ({
  characters: {},
  _addCharacterById: (cid, details) => {
    // add the entry to store
    const planetId = extractLastParamFromURL(details.homeworld);

    if (planetId) {
      set((state) => ({
        characters: {
          ...state.characters,
          [cid]: { ...details, planetId: planetId },
        },
      }));
    } else {
      // Error unable to parse the planet url
    }
  },
  getCharacterById: async (cid: string) => {
    const characterObj = get().characters[cid];
    // If no records is available
    if (!characterObj) {
      try {
        const response = await getCharacterDetails(cid);
        get()._addCharacterById(cid, response.data);
      } catch (error) {}
    }
  },
}));

export default useCharacterStore;
