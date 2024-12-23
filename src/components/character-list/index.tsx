import React from "react";
import useAppStore from "../../stores/store-app";
import CharacterCard from "../character-card";
import { useNavigate } from "react-router-dom";

/**
 * `CharactersList` component renders a list of character cards based on the `displayBatchIds` from the app store.
 * Each card displays basic information about a character, and allows the user to click a button to view more details.
 *
 * @component
 * @example
 * return (
 *   <CharactersList />
 * );
 */
const CharactersList: React.FC = () => {
	// Retrieve `displayBatchIds` from the app store using the custom hook `useAppStore`.
	const displayBatchIds = useAppStore((state) => state.displayBatchIds);

	// Use the `useNavigate` hook from `react-router-dom` to enable navigation to the character detail page.
	const navigate = useNavigate();

	/**
	 * Handles the click event for viewing character details.
	 * Navigates the user to the character detail page with the specified character ID.
	 *
	 * @param {string} id - The unique identifier of the character.
	 * @returns {void}
	 */
	const handleDetailsClick = (id: string): void => {
		navigate(`/details/${id}`);
	};

	return (
		<ul className="space-y-4">
			{displayBatchIds.map((value, key) => {
				return (
					<CharacterCard
						key={key} // Unique key to help React identify and manage the list items efficiently
						cid={value} // Character ID used to fetch and display character details
						handleClick={handleDetailsClick} // Function to handle click and navigate to character details
						btnText="View Details" // Text for the button on the character card
					/>
				);
			})}
		</ul>
	);
};

export default CharactersList;
