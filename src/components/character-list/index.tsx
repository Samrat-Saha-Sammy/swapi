import React from "react";
import useAppStore from "../../stores/store-app";
import CharacterCard from "../character-card";
import { useNavigate } from "react-router-dom";

const CharactersList: React.FC = () => {
	const displayBatchIds = useAppStore((state) => state.displayBatchIds);
	const navigate = useNavigate();

	const handleDetailsClick = (id: string) => {
		navigate(`/details/${id}`);
	};

	return (
		<ul className="space-y-4">
			{displayBatchIds.map((value, key) => {
				return (
					<CharacterCard
						key={key}
						cid={value}
						handleClick={handleDetailsClick}
						btnText="View Details"
					/>
				);
			})}
		</ul>
	);
};

export default CharactersList;
