import { IPlanet } from "../../services/types";

export interface IPlanetStore {
  planets: Record<string, IPlanet>;
  _fetchList: Set<string>;
  _addPlanetId(planetId: string, details: IPlanet): void;
  getPlanetById(planetId: string): void;
  getPlanetByCharacterId(cid: string): void;
}
