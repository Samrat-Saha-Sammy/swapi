import React from "react";
import useAppStore from "../../stores/store-app";
import CharacterCard from "../../components/character-card";

const FavouritesPage: React.FC = () => {
	const displayBatchIds = useAppStore((state) => state.likeBatchIds);
	const removeFromLikedList = useAppStore((state) => state.removeFromLikedList);

	const handleUnlikeClick = (id: string) => {
		removeFromLikedList(id);
	};

	return (
		<ul className="space-y-4">
			{displayBatchIds.size > 0 ? (
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
				<p>Oops! no like characters found</p>
			)}
		</ul>
	);
};

export default FavouritesPage;
