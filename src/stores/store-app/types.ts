/**
 * Interface representing the state and actions of the application store.
 * This store manages character data, pagination, and liked character information.
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
	 * This is used to determine the number of pages and display total count information.
	 */
	totalCount: number;

	/**
	 * The URL for the next page of character data, or `null` if there is no next page.
	 * This is used for pagination to fetch the next batch of characters.
	 */
	next: string | null;

	/**
	 * The URL for the previous page of character data, or `null` if there is no previous page.
	 * This is used for pagination to fetch the previous batch of characters.
	 */
	previous: string | null;

	/**
	 * A flag indicating whether a search operation is in progress.
	 * This is used to show or hide loading indicators or disable UI components during search.
	 */
	isSearching: boolean;

	/**
	 * The search term currently used for filtering character names.
	 * This is updated when the user types a query for character search.
	 */
	searchTerm: string;

	/**
	 * A flag indicating whether the search mode is active.
	 * This helps differentiate between normal browsing and searching states.
	 */
	inSearchMode: boolean;

	/**
	 * A flag indicating whether the application is loading data.
	 * This can be used to show loading spinners or disable interactions during data fetches.
	 */
	isLoading: boolean;

	/**
	 * An array of character IDs currently displayed on the page.
	 * This list is dynamically updated when pagination or search results change.
	 */
	displayBatchIds: string[];

	/**
	 * A set of character IDs that are marked as liked by the user.
	 * This is used to manage the characters the user has favorited.
	 */
	likeBatchIds: Set<string>;

	/**
	 * Updates the list of character IDs to display on the current page.
	 * This is typically used when the pagination or search results change.
	 *
	 * @param newBatchIds - The new list of character IDs to display on the page.
	 */
	_setDisplayBatchIds(newBatchIds: string[]): void;

	/**
	 * Fetches the character data for the current page and updates the display batch of character IDs.
	 * Optionally accepts query parameters for pagination or filtering by attributes like search term.
	 *
	 * @param params - The query parameters to be sent with the API request (optional).
	 * This can include parameters like page number for pagination or search query for filtering.
	 */
	fetchDisplayBatchIds(params?: Record<string, string>): void;

	/**
	 * Disables both the "next" and "previous" pagination buttons by setting their URLs to `null`.
	 * This is typically used when no further pages are available to navigate.
	 */
	_disableBothPrevNext(): void;

	/**
	 * Increments the `pageCount` and fetches the next page of character data.
	 * This updates the `pageCount` state and triggers a new API request for the next batch of characters.
	 */
	goToNextPage(): void;

	/**
	 * Decrements the `pageCount` and fetches the previous page of character data.
	 * This updates the `pageCount` state and triggers a new API request for the previous batch of characters.
	 */
	goToPrevPage(): void;

	/**
	 * Adds a character ID to the liked list and displays a success toast notification.
	 * This is used when the user likes a character and adds it to their favorites.
	 *
	 * @param id - The character ID to be added to the liked list.
	 */
	addToLikedList(id: string): void;

	/**
	 * Removes a character ID from the liked list and displays a removal toast notification.
	 * This is used when the user removes a character from their favorites.
	 *
	 * @param id - The character ID to be removed from the liked list.
	 */
	removeFromLikedList(id: string): void;

	/**
	 * Searches for characters by name and updates the displayed list of character IDs.
	 * This is used to filter characters based on a query entered by the user.
	 *
	 * @param query - The search query used to filter character names.
	 * This should be a string representing the user's input in the search field.
	 */
	searchByName(query: string): void;

	/**
	 * Clears the current search and refetches the character data.
	 * This resets the search state and restores the full list of characters, typically used when clearing the search bar.
	 */
	clearSearch(): void;
}
