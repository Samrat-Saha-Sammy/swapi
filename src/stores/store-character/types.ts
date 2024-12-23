import { ICharacter } from "../../shared/services/types";

/**
 * Extends the ICharacter interface to include a planetId property.
 * This interface is used for characters with an associated planet ID.
 */
export interface ICharacterWithPlanetId extends ICharacter {
	/**
	 * The unique ID of the planet associated with the character's homeworld.
	 * Extracted from the character's homeworld URL.
	 */
	planetId: string;
}

/**
 * The store interface for managing character data.
 * This interface defines the structure and methods for adding and retrieving character details.
 */
export interface ICharacterStore {
	/**
	 * An object that stores characters by their unique ID.
	 * The character data includes the planet ID along with other character details.
	 */
	characters: Record<string, ICharacterWithPlanetId>;

	/**
	 * Adds character details to the store using their unique ID.
	 *
	 * @param cid - The unique ID of the character to be added.
	 * @param details - The character details to be added to the store.
	 */
	_addCharacterById(cid: string, details: ICharacter): void;

	/**
	 * Retrieves the character details by their unique ID.
	 *
	 * @param cid - The unique ID of the character to fetch.
	 */
	getCharacterById(cid: string): void;
}
