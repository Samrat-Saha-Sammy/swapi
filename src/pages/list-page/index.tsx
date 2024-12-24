import React, { useEffect } from "react";
import useAppStore from "../../stores/store-app";
import CharactersList from "../../components/character-list";
import SearchBar from "../../components/search-bar";
import PaginationBar from "../../components/pagination-bar";

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
	const fetchDisplayBatchIds = useAppStore(
		(state) => state.fetchDisplayBatchIds
	);

	// Fetch data when the component is mounted
	useEffect(() => {
		fetchDisplayBatchIds();
		// Disabling the eslint for to supress the warning, as not intended to add methods in dependency
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{/* <!-- Search Bar --> */}
			<SearchBar />

			{/* <!-- Items List --> */}
			<CharactersList />

			{/* <!-- Pagination --> */}
			<PaginationBar />
		</>
	);
};

export default ListPage;
