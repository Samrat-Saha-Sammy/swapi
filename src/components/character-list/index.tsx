import React from "react";
import useAppStore from "../../stores/store-app";
import CharacterCard from "../character-card";

const CharactersList: React.FC = () => {
	const displayBatchIds = useAppStore((state) => state.displayBatchIds);

	return (
		<ul className="space-y-4">
			{displayBatchIds.map((value, key) => {
				return <CharacterCard key={key} cid={value} />;
			})}
		</ul>
	);
};

export default CharactersList;
