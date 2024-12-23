import React, { useEffect } from "react";
import useAppStore from "../../stores/store-app";
import CharactersList from "../../components/character-list";

/**
 * The `ListPage` component displays a paginated list of characters and provides search functionality.
 * It integrates with a global store to manage pagination, loading states, and fetching character data.
 *
 * @component
 * @example
 * return (
 *   <ListPage />
 * )
 */
const ListPage: React.FC = () => {
	// Retrieve necessary state values from the global app store
	const totalCount = useAppStore((state) => state.totalCount);
	const pageCount = useAppStore((state) => state.pageCount);
	const paginationSize = useAppStore((state) => state.paginationSize);
	const isPrev = useAppStore((state) => !!state.previous);
	const isNext = useAppStore((state) => !!state.next);
	const isLoading = useAppStore((state) => state.isLoading);
	const goToNextPage = useAppStore((state) => state.goToNextPage);
	const goToPrevPage = useAppStore((state) => state.goToPrevPage);
	const fetchDisplayBatchIds = useAppStore(
		(state) => state.fetchDisplayBatchIds
	);

	// Fetch data when the component is mounted
	useEffect(() => {
		fetchDisplayBatchIds();
	}, []);

	/**
	 * Handles the click event to navigate to the previous page if available.
	 */
	const handlePrevClick = () => {
		isPrev && goToPrevPage();
	};

	/**
	 * Handles the click event to navigate to the next page if available.
	 */
	const handleNextClick = () => {
		isNext && goToNextPage();
	};

	// Calculate the records range to display
	const recordsTo: number = Math.min(totalCount, paginationSize * pageCount);
	const recordsFrom: number = recordsTo - paginationSize + 1;

	return (
		<>
			{/* <!-- Search Bar --> */}
			<div className="flex items-center space-x-2">
				<input
					type="text"
					placeholder="Search items..."
					className="flex-grow rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>

			{/* <!-- Items List --> */}
			<CharactersList />

			{/* <!-- Pagination --> */}
			<div className="flex items-center justify-between text-gray-600">
				<p className="text-sm">
					Showing{" "}
					<span className="font-semibold">
						{recordsFrom}-{recordsTo}
					</span>{" "}
					of <span className="font-semibold">{totalCount}</span> records
				</p>
				<div className="flex space-x-2 align-middle">
					{isLoading && (
						<span className="text-sm font-semibold">Loading results</span>
					)}
					{/* Previous page button */}
					<button
						className={`rounded-lg px-4 py-2 font-semibold text-white shadow  focus:outline-none ${
							isPrev
								? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
								: "bg-gray-500 cursor-default"
						}`}
						onClick={() => {
							handlePrevClick();
						}}
					>
						Previous
					</button>
					{/* Next page button */}
					<button
						className={`rounded-lg px-4 py-2 font-semibold text-white shadow  focus:outline-none ${
							isNext
								? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
								: "bg-gray-500 cursor-default"
						}`}
						onClick={() => {
							handleNextClick();
						}}
					>
						Next
					</button>
				</div>
			</div>
		</>
	);
};

export default ListPage;
