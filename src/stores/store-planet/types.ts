import { IPlanet } from "../../shared/services/types";

export interface IPlanetStore {
	planets: Record<string, IPlanet>;
	_fetchList: Set<string>;
	_addPlanetById(planetId: string, details: IPlanet): void;
	getPlanetById(planetId: string): void;
	getPlanetByCharacterId(cid: string): void;
}
