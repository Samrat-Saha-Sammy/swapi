import React from "react";
import useAppStore from "../../stores/store-app";

/**
 * PaginationBar component allows users to navigate through paginated records.
 * It displays the current record range, the total number of records, and provides
 * navigation buttons to go to the previous or next page.
 *
 * @component
 * @example
 * return (
 *   <PaginationBar />
 * )
 */
const PaginationBar: React.FC = () => {
	// Retrieve necessary state values from the global app store
	const totalCount = useAppStore((state) => state.totalCount);
	const pageCount = useAppStore((state) => state.pageCount);
	const paginationSize = useAppStore((state) => state.paginationSize);
	const isPrev = useAppStore((state) => !!state.previous);
	const isNext = useAppStore((state) => !!state.next);
	const isLoading = useAppStore((state) => state.isLoading);
	const inSearchMode = useAppStore((state) => state.inSearchMode);
	const goToNextPage = useAppStore((state) => state.goToNextPage);
	const goToPrevPage = useAppStore((state) => state.goToPrevPage);

	/**
	 * Handles the click event to navigate to the previous page if available.
	 * It invokes the `goToPrevPage` action when the previous page is available.
	 */
	const handlePrevClick = () => {
		if (isPrev) {
			goToPrevPage();
		}
	};

	/**
	 * Handles the click event to navigate to the next page if available.
	 * It invokes the `goToNextPage` action when the next page is available.
	 */
	const handleNextClick = () => {
		if (isNext) {
			goToNextPage();
		}
	};

	// Calculate the records range to display
	const recordsTo: number = Math.min(totalCount, paginationSize * pageCount);
	const recordsFrom: number = recordsTo - paginationSize + 1;

	return (
		<>
			{!inSearchMode && totalCount > 0 && (
				<div
					className="flex items-center justify-between text-gray-600"
					role="region"
					aria-label="Pagination"
				>
					<p className="text-sm">
						Showing{" "}
						<span className="font-semibold">
							{recordsFrom}-{recordsTo}
						</span>{" "}
						of <span className="font-semibold">{totalCount}</span> records
					</p>
					<div className="flex space-x-2 align-middle">
						{isLoading && (
							<span className="text-sm font-semibold" aria-live="polite">
								Loading results
							</span>
						)}
						{/* Previous page button */}
						<button
							className={`rounded-lg px-4 py-2 font-semibold text-white shadow focus:outline-none ${
								isPrev
									? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
									: "bg-gray-500 cursor-default"
							}`}
							onClick={handlePrevClick}
							disabled={!isPrev}
							aria-disabled={!isPrev}
						>
							Previous
						</button>
						{/* Next page button */}
						<button
							className={`rounded-lg px-4 py-2 font-semibold text-white shadow focus:outline-none ${
								isNext
									? "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
									: "bg-gray-500 cursor-default"
							}`}
							onClick={handleNextClick}
							disabled={!isNext}
							aria-disabled={!isNext}
						>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default PaginationBar;
