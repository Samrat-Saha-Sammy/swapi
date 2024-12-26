import React, { useDeferredValue, useState } from "react";
import useAppStore from "../../stores/store-app";

/**
 * SearchBar component allows users to input a search query, clear the search,
 * and initiate a search operation based on the query.
 *
 * @component
 * @example
 * return (
 *   <SearchBar />
 * )
 */
const SearchBar: React.FC = () => {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const deferredQuery = useDeferredValue(searchQuery);

	const inSearchMode = useAppStore((state) => state.inSearchMode);
	const isSearching = useAppStore((state) => state.isSearching);
	const searchByName = useAppStore((state) => state.searchByName);
	const clearSearch = useAppStore((state) => state.clearSearch);

	/**
	 * Handles input change event by sanitizing the input value to remove any unsafe characters.
	 *
	 * @param {React.ChangeEvent<HTMLInputElement>} event - The input change event
	 */
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const sanitizedInput = event.target.value.trim().replace(/[<>]/g, "");
		setSearchQuery(sanitizedInput);
	};

	/**
	 * Handles the search operation by calling the `searchByName` function.
	 * It prevents initiating a search if one is already in progress.
	 */
	const handleSearch = () => {
		if (!isSearching) {
			searchByName(deferredQuery);
		}
	};

	/**
	 * Clears the current search query and invokes the `clearSearch` action.
	 */
	const handleClearSearch = () => {
		setSearchQuery("");
		clearSearch();
	};

	return (
		<div className="flex items-center space-x-2">
			<div className="relative flex-grow">
				<input
					type="text"
					placeholder="Search characters..."
					className="w-full rounded-lg border border-gray-300 p-3 pr-10 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
					onChange={handleInputChange}
					aria-label="Search characters"
					value={searchQuery}
					data-testid="search-field"
				/>
				{inSearchMode && (
					<button
						className="absolute inset-y-0 right-3 flex items-center justify-center text-gray-500 hover:text-red-700 focus:text-gray-700"
						type="button"
						aria-label="Clear search"
						onClick={handleClearSearch}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-5 w-5"
							aria-hidden="true"
						>
							<path
								fillRule="evenodd"
								d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.414 1.414L13.414 10.5l4.361 4.361a1 1 0 01-1.414 1.414L12 11.828l-4.361 4.361a1 1 0 01-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 010-1.414z"
								clipRule="evenodd"
							/>
						</svg>
					</button>
				)}
			</div>
			<button
				className={`rounded-md p-3 border border-transparent text-center text-sm text-white ${
					isSearching
						? `bg-slate-400 cursor-default`
						: `bg-slate-800 transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
				}`}
				type="button"
				onClick={handleSearch}
				aria-label="Search"
				disabled={isSearching}
			>
				<svg
					aria-labelledby="title desc"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 19.9 19.7"
					fill="currentColor"
					className="w-5 h-5"
					aria-hidden="true"
				>
					<g className="search-path" fill="none" stroke="#848F91">
						<path strokeLinecap="square" d="M18.5 18.3l-5.4-5.4" />
						<circle cx="8" cy="8" r="7" />
					</g>
				</svg>
			</button>
		</div>
	);
};

export default SearchBar;
