export interface IAppStore {
	paginationSize: number;
	pageCount: number;
	totalCount: number;
	next: string | null;
	previous: string | null;
	isSearching: boolean;
	isLoading: boolean;
	displayBatchIds: string[];
	likeBatchIds: Set<string>;
	_setDisplayBatchIds(newBatchIds: string[]): void;
	fetchDisplayBatchIds(params?: Record<string, string>): void;
	_disableBothPrevNext(): void;
	goToNextPage(): void;
	goToPrevPage(): void;
	addToLikedList(id: string): void;
	removeFromLikedList(id: string): void;
}
