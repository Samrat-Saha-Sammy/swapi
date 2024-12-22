import { create } from "zustand";
import { IFilmStore } from "./types";
import useCharacterStore from "../store-character";
import { extractLastParamFromURL } from "../../utils";
import { getFilmDetails } from "../../services";

const useFilmStore = create<IFilmStore>((set, get) => ({
  films: {},
  _addFilmById: (filmId, details) => {
    set((state) => ({
      films: {
        ...state.films,
        [filmId]: { ...details },
      },
    }));
  },
  getFilmById: async (filmId) => {
    try {
      const planetObj = get().films[filmId];
      // If no records is available
      if (!planetObj) {
        // Adding a id to discard repeat next request
        const response = await getFilmDetails(filmId);
        get()._addFilmById(filmId, response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
  getFilmsByCharacterId: async (cid) => {
    let character = useCharacterStore.getState().characters[cid];

    if (character && character.films) {
      character.films.forEach((filmUrl) => {
        const filmId = extractLastParamFromURL(filmUrl);
        if (filmId) get().getFilmById(filmId);
        else {
          // Unable to extract film id from film URL
        }
      });
    } else {
      // No Character found
    }
  },
}));

export default useFilmStore;
