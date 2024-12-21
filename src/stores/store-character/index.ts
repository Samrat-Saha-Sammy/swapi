import { create } from "zustand";
import { ICharacterStore, TCharacterRecordValue } from "./types";
import { getCharacterDetails } from "../../services";
import { extractPlanetIdFromURL } from "../../utils";
import usePlanetStore from "../store-planet";

const useCharacterStore = create<ICharacterStore>((set, get) => ({
  characters: {},
  _addCharacterById: (cid, details) => {
    const payload = details.result.properties;
    const planetId = extractPlanetIdFromURL(payload.homeworld); // Extract the planet id from the url
    // @TODO: Proactive fetch of planet details from character. Could be moved to the component level for fetch when required
    if (planetId) usePlanetStore.getState().getPlanetById(planetId);
    // Create a record set using name, url, uid
    try {
      const newRecord: TCharacterRecordValue = {
        height: payload.height,
        mass: payload.mass,
        hair_color: payload.mass,
        skin_color: payload.skin_color,
        eye_color: payload.eye_color,
        birth_year: payload.birth_year,
        gender: payload.gender,
        created: payload.created,
        edited: payload.edited,
        name: payload.name,
        homeworld: payload.homeworld,
        url: payload.url,
        description: details.result.description,
        homeWorldId: planetId,
      };
      // add the entry to store
      set((state) => ({
        characters: {
          ...state.characters,
          [cid]: { ...newRecord },
        },
      }));
    } catch (error) {
      console.error("Error character details mismatch", error);
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
