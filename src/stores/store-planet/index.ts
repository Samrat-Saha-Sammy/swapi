import { create } from "zustand";
import { IPlanetStore } from "./types";
import useCharacterStore from "../store-character";
import { getPlanetDetails } from "../../services";

const usePlanetStore = create<IPlanetStore>((set, get) => ({
  planets: {},
  _fetchList: new Set(),
  _addPlanetById: (planetId, details) => {
    set((state) => ({
      planets: {
        ...state.planets,
        [planetId]: { ...details },
      },
    }));
    get()._fetchList.delete(planetId);
  },
  getPlanetById: async (planetId) => {
    try {
      const planetObj = get().planets[planetId];
      // If no records is available
      if (!planetObj && !get()._fetchList.has(planetId)) {
        get()._fetchList.add(planetId);
        // Adding a id to discard repeat next request
        const response = await getPlanetDetails(planetId);
        get()._addPlanetById(planetId, response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
  getPlanetByCharacterId: async (cid) => {
    let character = useCharacterStore.getState().characters[cid];

    if (character && character.planetId) {
      get().getPlanetById(character.planetId);
    } else {
      // No Character found
    }
  },
}));

export default usePlanetStore;
