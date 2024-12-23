import React from "react";
import useAppStore from "../../stores/store-app";
import CharacterCard from "../../components/character-card";

/**
 * FavouritesPage component displays a list of characters that have been liked by the user.
 * It fetches the list of liked characters from the app store and renders each character as a `CharacterCard`.
 * Users can also unlike a character by clicking the "Un Like" button, which removes the character from the liked list.
 *
 * @component
 * @returns {JSX.Element} The rendered FavouritesPage component with a list of liked characters.
 */
const FavouritesPage: React.FC = () => {
	const displayBatchIds = useAppStore((state) => state.likeBatchIds); // Fetch liked characters' IDs
	const removeFromLikedList = useAppStore((state) => state.removeFromLikedList); // Method to remove character from liked list

	/**
	 * handleUnlikeClick removes a character from the liked list.
	 *
	 * @param {string} id - The ID of the character to be removed from the liked list.
	 */
	const handleUnlikeClick = (id: string) => {
		removeFromLikedList(id); // Removes the character from the liked list
	};

	return (
		<ul className="space-y-4">
			{displayBatchIds.size > 0 ? (
				// Map through the liked character IDs and render a CharacterCard for each
				Array.from(displayBatchIds).map((value, key) => {
					return (
						<CharacterCard
							key={key}
							cid={value}
							handleClick={handleUnlikeClick}
							btnText="Un Like"
						/>
					);
				})
			) : (
				// Show message when there are no liked characters
				<p className="text-red-400">Oops! fav list is empty</p>
			)}
		</ul>
	);
};

export default FavouritesPage;
