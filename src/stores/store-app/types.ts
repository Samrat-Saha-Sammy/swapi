export interface IAppStore {
  paginationSize: number;
  pageCount: number;
  isSearching: boolean;
  displayBatchIds: string[];
  _setDisplayBatchIds(newBatchIds: string[]): void;
  fetchDisplayBatchIds(): void;
}
