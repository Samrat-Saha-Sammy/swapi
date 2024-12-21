import { create } from "zustand";
import { IPlanetStore, TPlanetRecordValue } from "./types";
import { getPlanetDetails } from "../../services";

const usePlanetStore = create<IPlanetStore>((set, get) => ({
  planets: {},
  _addPlanetById: (planetId, details) => {
    const payload = details.result.properties;
    // Create a record set using uid
    try {
      const newRecord: TPlanetRecordValue = {
        diameter: payload.diameter,
        rotation_period: payload.rotation_period,
        orbital_period: payload.orbital_period,
        gravity: payload.gravity,
        population: payload.population,
        climate: payload.climate,
        terrain: payload.terrain,
        surface_water: payload.surface_water,
        created: payload.created,
        edited: payload.edited,
        name: payload.name,
        url: payload.url,
        description: details.result.description,
      };
      // add the entry to store
      set((state) => ({
        planets: {
          ...state.planets,
          [planetId]: { ...newRecord },
        },
      }));
    } catch (error) {
      console.error("Error planet details mismatch", error);
    }
  },
  getPlanetById: async (planetId) => {
    try {
      if (!planetId) throw new Error("Unable to fetch home world url");

      const planetObj = get().planets[planetId];
      // If no records is available
      if (!planetObj) {
        const response = await getPlanetDetails(planetId);
        get()._addPlanetById(planetId, response.data);
      }
    } catch (error) {
      console.error(error);
    }
  },
}));

export default usePlanetStore;
