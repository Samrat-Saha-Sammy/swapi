const mockStore = {
	displayBatchIds: ["1"],
	totalCount: 100,
	pageCount: 1,
	paginationSize: 10,
	previous: true,
	next: true,
	isLoading: false,
	inSearchMode: false,
	likeBatchIds: new Set(),
	_setDisplayBatchIds: jest.fn(),
	fetchDisplayBatchIds: jest.fn(),
	_disableBothPrevNext: jest.fn(),
	goToNextPage: jest.fn(),
	goToPrevPage: jest.fn(),
	addToLikedList: jest.fn(),
	removeFromLikedList: jest.fn(),
	searchByName: jest.fn(),
	clearSearch: jest.fn(),
};

const zustand = jest.requireActual("zustand");

export default zustand.create(() => mockStore);
