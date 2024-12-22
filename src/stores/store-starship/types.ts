import { IStarship } from "../../shared/services/types";

export interface IStarshipStore {
	starships: Record<string, IStarship>;
	_addStarshipById(shipId: string, details: IStarship): void;
	getStarshipById(shipId: string): void;
	getStarshipsByCharacterId(cid: string): void;
}
