import { IFilm } from "../../shared/services/types";

/**
 * Interface for the film store, which manages film data in the application.
 * The store holds film details indexed by their unique film IDs and provides methods to interact with the data.
 */
export interface IFilmStore {
	/**
	 * An object that stores films by their unique film ID.
	 * Each film's details include the complete information related to the specific film.
	 */
	films: Record<string, IFilm>;

	/**
	 * Adds film details to the store using the film's unique ID.
	 *
	 * @param filmId - The unique ID of the film to be added to the store.
	 * @param details - The film details to be added to the store.
	 */
	_addFilmById(filmId: string, details: IFilm): void;

	/**
	 * Retrieves film details from the store using the film's unique ID.
	 * If the film details are not already in the store, the method will initiate a fetch operation to retrieve them.
	 *
	 * @param filmId - The unique ID of the film to fetch from the store.
	 */
	getFilmById(filmId: string): void;

	/**
	 * Retrieves and stores all films associated with a specific character by their unique character ID.
	 * The films associated with the character are fetched and stored using their unique film IDs.
	 *
	 * @param cid - The unique ID of the character to get films for.
	 */
	getFilmsByCharacterId(cid: string): void;
}
