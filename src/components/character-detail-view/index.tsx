import React, { useEffect, useState } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";
import { useNavigate } from "react-router-dom";
import useFilmStore from "../../stores/store-film";
import useStarshipStore from "../../stores/store-starship";

const CharacterDetailView: React.FC<{ cid: string }> = ({ cid }) => {
	// Access properties from stores to access data
	const character = useCharacterStore((state) => state.characters[cid]);
	const planet = usePlanetStore((state) => state.planets[character.planetId]);

	// Access methods from stores to trigger fetch
	const getCharacterById = useCharacterStore((state) => state.getCharacterById);
	const getPlanetById = usePlanetStore((state) => state.getPlanetById);
	const getStarshipsByCharacterId = useStarshipStore(
		(state) => state.getStarshipsByCharacterId
	);
	const getFilmsByCharacterId = useFilmStore(
		(state) => state.getFilmsByCharacterId
	);

	// Getting all films & starships to loop through and filter
	const allFilms = useFilmStore((state) => state.films);
	const allStarships = useStarshipStore((state) => state.starships);

	useEffect(() => {
		getCharacterById(cid);
	}, [cid]);

	useEffect(() => {
		character && character.planetId && getPlanetById(character.planetId);
		character && character.films && getFilmsByCharacterId(cid);
		character && character.starships && getStarshipsByCharacterId(cid);
	}, [character]);

	return (
		<div>
			<h3>{character?.name}</h3>
			<p>{character?.hair_color}</p>
			<p>{character?.eye_color}</p>
			<p>{character?.gender}</p>
			<p>{planet?.name}</p>
			<br />
			<p>List of films: </p>

			{character?.films.length > 0 ? (
				Object.values(allFilms).map((film) => {
					return character.films.includes(film.url) ? (
						<p key={film.url}>{film.title}</p>
					) : null;
				})
			) : (
				<>No Films</>
			)}
			<br />
			<p>List of starships: </p>
			{character?.starships.length > 0 ? (
				Object.values(allStarships).map((starship) => {
					return character.starships.includes(starship.url) ? (
						<p key={starship.url}>{starship.name}</p>
					) : null;
				})
			) : (
				<>No Starhips</>
			)}
		</div>
	);
};

export default CharacterDetailView;
