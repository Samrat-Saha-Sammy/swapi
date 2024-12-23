import { IStarship } from "../../shared/services/types";

/**
 * Interface for the Starship store used in the Zustand state management.
 * This interface defines the structure of the store for managing starship data and interactions.
 */
export interface IStarshipStore {
	/**
	 * A record of starship details indexed by starship ID.
	 * Each entry contains the full details of a starship.
	 */
	starships: Record<string, IStarship>;

	/**
	 * Adds starship details to the store using the starship's unique ID.
	 *
	 * @param shipId - The unique ID of the starship to be added to the store.
	 * @param details - The starship details to be added to the store.
	 */
	_addStarshipById(shipId: string, details: IStarship): void;

	/**
	 * Retrieves starship details by starship ID.
	 * If the starship details are not available in the store, it triggers a fetch to get the details.
	 *
	 * @param shipId - The unique ID of the starship to fetch.
	 */
	getStarshipById(shipId: string): void;

	/**
	 * Retrieves all starships associated with a character using the character's unique ID.
	 * It fetches details for each starship the character is associated with.
	 *
	 * @param cid - The unique ID of the character whose starships are to be fetched.
	 */
	getStarshipsByCharacterId(cid: string): void;
}
