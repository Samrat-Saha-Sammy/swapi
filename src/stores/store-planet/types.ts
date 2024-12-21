import { IPlanetDetails } from "../../services/types";

export type TPlanetRecordValue = {
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  created: string;
  edited: string;
  name: string;
  url: string;
  description: string;
};

export type TPlanetRecord = Record<string, TPlanetRecordValue>;

export interface IPlanetStore {
  planets: TPlanetRecord;
  _addPlanetById(planetId: string, details: IPlanetDetails): void;
  getPlanetById(planetId: string): void;
}
