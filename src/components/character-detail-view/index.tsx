import React, { useEffect, useState } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";
import { useNavigate } from "react-router-dom";
import useFilmStore from "../../stores/store-films";
import { IFilm } from "../../services/types";

const CharacterDetailView: React.FC<{ cid: string }> = ({ cid }) => {
	const character = useCharacterStore((state) => state.characters[cid]);
	const getCharacterById = useCharacterStore((state) => state.getCharacterById);
	const getPlanetById = usePlanetStore((state) => state.getPlanetById);

	const allFilms = useFilmStore((state) => state.films);

	const getFilmsByCharacterId = useFilmStore(
		(state) => state.getFilmsByCharacterId
	);
	const [films, setFilms] = useState<(IFilm | null)[]>([]);

	useEffect(() => {
		getCharacterById(cid);
	}, [cid]);

	useEffect(() => {
		character && character.planetId && getPlanetById(character.planetId);
		//getFilmsByCharacterId(cid);
	}, [character]);

	useEffect(() => {
		character && character.films && getFilmsByCharacterId(cid);
	}, [character]);

	return (
		<div>
			<p>{character?.name}</p>
			<p>{JSON.stringify(allFilms)}</p>
		</div>
	);
};

export default CharacterDetailView;
