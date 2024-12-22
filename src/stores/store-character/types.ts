import { ICharacter } from "../../shared/services/types";

interface ICharacterWithPlanetId extends ICharacter {
	planetId: string;
}

export interface ICharacterStore {
	characters: Record<string, ICharacterWithPlanetId>;
	_addCharacterById(cid: string, details: ICharacter): void;
	getCharacterById(cid: string): void;
}
