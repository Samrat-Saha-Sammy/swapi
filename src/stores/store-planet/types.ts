import { IPlanet } from "../../shared/services/types";

/**
 * Interface defining the shape of the planet store.
 * This store manages planet details and provides methods to fetch and store planet data.
 */
export interface IPlanetStore {
	/**
	 * A record of planet details indexed by planet ID.
	 * Each entry contains the full details of a planet.
	 */
	planets: Record<string, IPlanet>;

	/**
	 * A set of planet IDs that are currently being fetched to avoid duplicate requests.
	 */
	_fetchList: Set<string>;

	/**
	 * Adds planet details to the store using the planet's unique ID.
	 *
	 * @param planetId - The unique ID of the planet to be added to the store.
	 * @param details - The planet details to be added to the store.
	 */
	_addPlanetById(planetId: string, details: IPlanet): void;

	/**
	 * Retrieves planet details by planet ID.
	 * If the planet details are not available in the store, it fetches the details from an external service.
	 *
	 * @param planetId - The unique ID of the planet to fetch.
	 */
	getPlanetById(planetId: string): void;

	/**
	 * Retrieves the planet associated with a character using the character's unique ID.
	 * The character’s planet ID is used to fetch the planet details.
	 *
	 * @param cid - The unique ID of the character whose associated planet is to be fetched.
	 */
	getPlanetByCharacterId(cid: string): void;
}
