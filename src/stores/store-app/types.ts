export interface IAppStore {
	paginationSize: number;
	pageCount: number;
	isSearching: boolean;
	displayBatchIds: string[];
	likeBatchIds: Set<string>;
	_setDisplayBatchIds(newBatchIds: string[]): void;
	fetchDisplayBatchIds(): void;
	addToLikedList(id: string): void;
	removeFromLikedList(id: string): void;
}
