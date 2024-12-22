import React, { useEffect, useState } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";
import { useNavigate } from "react-router-dom";
import useFilmStore from "../../stores/store-film";

const CharacterDetailView: React.FC<{ cid: string }> = ({ cid }) => {
	const character = useCharacterStore((state) => state.characters[cid]);
	const getCharacterById = useCharacterStore((state) => state.getCharacterById);
	const getPlanetById = usePlanetStore((state) => state.getPlanetById);
	const planet = usePlanetStore((state) => state.planets[character.planetId]);
	const getFilmsByCharacterId = useFilmStore(
		(state) => state.getFilmsByCharacterId
	);

	const allFilms = useFilmStore((state) => state.films);

	useEffect(() => {
		getCharacterById(cid);
	}, [cid]);

	useEffect(() => {
		character && character.planetId && getPlanetById(character.planetId);
		character && character.films && getFilmsByCharacterId(cid);
	}, [character]);

	useEffect(() => {}, [character]);

	return (
		<div>
			<h3>{character?.name}</h3>
			<p>{character?.hair_color}</p>
			<p>{character?.eye_color}</p>
			<p>{character?.gender}</p>
			<p>{planet?.name}</p>
			<br />
			<p>List of films: </p>
			{character &&
				character.films &&
				Object.values(allFilms).map((film) => {
					return character.films.includes(film.url) ? (
						<p key={film.url}>{film.title}</p>
					) : null;
				})}
		</div>
	);
};

export default CharacterDetailView;
