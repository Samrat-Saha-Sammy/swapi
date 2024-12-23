import React, { useEffect } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";
import { useNavigate } from "react-router-dom";
import useFilmStore from "../../stores/store-film";

const CharacterCard: React.FC<{ cid: string }> = ({ cid }) => {
	const character = useCharacterStore((state) => state.characters[cid]);
	const planet = usePlanetStore((state) => state.planets[character.planetId]);

	const getPlanetByCharacterId = usePlanetStore(
		(state) => state.getPlanetByCharacterId
	);
	const getCharacterById = useCharacterStore((state) => state.getCharacterById);
	const navigate = useNavigate();

	const handleDetailsClick = (id: string) => {
		navigate(`/details/${id}`);
	};

	useEffect(() => {
		getCharacterById(cid);
		getPlanetByCharacterId(cid);
	}, [cid]);

	return (
		<li className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
			<div>
				<h2 className="text-lg font-semibold ">{character?.name}</h2>
				<p className="text-sm text-gray-600 flex space-x-2">
					<span>Gender: {`${character?.gender}`}</span>
					<span>Home Planet: {`${planet?.name}`}</span>
				</p>
			</div>
			<button
				className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
				onClick={() => handleDetailsClick(cid)}
			>
				View Details
			</button>
		</li>
	);
};

export default CharacterCard;
