/**
 * Interface representing the state and actions of the application store.
 * This store handles character data, pagination, and liked character management.
 */
export interface IAppStore {
	/**
	 * The number of characters displayed per page.
	 */
	paginationSize: number;

	/**
	 * The current page number in the pagination.
	 */
	pageCount: number;

	/**
	 * The total number of characters available across all pages.
	 */
	totalCount: number;

	/**
	 * The URL for the next page of character data, or `null` if there is no next page.
	 */
	next: string | null;

	/**
	 * The URL for the previous page of character data, or `null` if there is no previous page.
	 */
	previous: string | null;

	/**
	 * A flag indicating whether a search operation is in progress.
	 */
	isSearching: boolean;

	searchTerm: string;
	inSearchMode: boolean;

	/**
	 * A flag indicating whether the app is loading data.
	 */
	isLoading: boolean;

	/**
	 * An array of character IDs currently displayed on the page.
	 */
	displayBatchIds: string[];

	/**
	 * A set of character IDs that are marked as liked by the user.
	 */
	likeBatchIds: Set<string>;

	/**
	 * Updates the list of character IDs to display on the current page.
	 *
	 * @param newBatchIds - The new list of character IDs.
	 */
	_setDisplayBatchIds(newBatchIds: string[]): void;

	/**
	 * Fetches the character data for the current page and updates the display batch of character IDs.
	 * Optionally accepts query parameters for pagination or filtering.
	 *
	 * @param params - The query parameters to be sent with the API request (optional).
	 */
	fetchDisplayBatchIds(params?: Record<string, string>): void;

	/**
	 * Disables both the "next" and "previous" pagination buttons by setting their URLs to `null`.
	 */
	_disableBothPrevNext(): void;

	/**
	 * Increments the `pageCount` and fetches the next page of character data.
	 * Updates the `pageCount` state accordingly.
	 */
	goToNextPage(): void;

	/**
	 * Decrements the `pageCount` and fetches the previous page of character data.
	 * Updates the `pageCount` state accordingly.
	 */
	goToPrevPage(): void;

	/**
	 * Adds a character ID to the liked list and displays a success toast.
	 *
	 * @param id - The character ID to be added to the liked list.
	 */
	addToLikedList(id: string): void;

	/**
	 * Removes a character ID from the liked list and displays a removal toast.
	 *
	 * @param id - The character ID to be removed from the liked list.
	 */
	removeFromLikedList(id: string): void;

	searchByName(query: string): void;
	clearSearch(): void;
}
