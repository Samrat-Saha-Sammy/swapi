import { ICharacter, ICharacterDetails } from "../../services/types";

export type TCharacterRecordValue = {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
  description: string;
  homeWorldId: string | null;
};

export type TCharacterRecord = {
  [key: string]: TCharacterRecordValue;
};

export interface ICharacterStore {
  characters: TCharacterRecord;
  _addCharacterById(cid: string, details: ICharacterDetails): void;
  getCharacterById(cid: string): void;
}
