import React, { useEffect, useState } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";
import { useNavigate } from "react-router-dom";
import useFilmStore from "../../stores/store-film";
import useStarshipStore from "../../stores/store-starship";
import useAppStore from "../../stores/store-app";

const CharacterDetailCard: React.FC<{ cid: string }> = ({ cid }) => {
	// Access properties from stores to access data
	const character = useCharacterStore((state) => state.characters[cid]);
	const planet = usePlanetStore((state) => state.planets[character?.planetId]);

	// Access methods from stores to trigger fetch
	const getCharacterById = useCharacterStore((state) => state.getCharacterById);
	const getPlanetById = usePlanetStore((state) => state.getPlanetById);
	const getStarshipsByCharacterId = useStarshipStore(
		(state) => state.getStarshipsByCharacterId
	);
	const getFilmsByCharacterId = useFilmStore(
		(state) => state.getFilmsByCharacterId
	);
	const favList = useAppStore((state) => state.likeBatchIds);
	const addToLikedList = useAppStore((state) => state.addToLikedList);
	const removeFromLikedList = useAppStore((state) => state.removeFromLikedList);

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

	const handleLikeClick = () => {
		if (favList.has(cid)) removeFromLikedList(cid);
		else addToLikedList(cid);
	};

	return (
		<div>
			{/* Character Info Section */}
			<div className="flex justify-between items-center mb-6">
				<h3 className="mb-6 text-4xl font-extrabold text-gray-900">
					{character?.name}
				</h3>

				<button
					className={`relative group flex items-center justify-center w-12 h-12 rounded-full text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none ${
						favList.has(cid) ? "bg-red-500" : "bg-gray-400"
					}`}
					onClick={() => {
						handleLikeClick();
					}}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						className="h-8 w-8 fill-current transition-transform duration-300 group-hover:scale-110"
					>
						<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
					</svg>
				</button>
			</div>

			{/* <!-- Character Details --> */}
			<div className="mb-8 text-gray-700">
				<p>
					<span className="font-semibold text-gray-900">Gender: </span>
					{character?.gender}
				</p>
				<p>
					<span className="font-semibold text-gray-900">Hair Color: </span>
					{character?.hair_color}
				</p>
				<p>
					<span className="font-semibold text-gray-900">Eye Color: </span>
					{character?.eye_color}
				</p>
				<p>
					<span className="font-semibold text-gray-900">Planet Name: </span>
					{planet?.name}
				</p>
			</div>

			{/* Films Appeared In */}
			<div className="mb-8">
				<h4 className="mb-4 text-2xl font-semibold text-gray-800">
					Films Appeared In
				</h4>
				<div>
					{character?.films.length > 0 ? (
						Object.values(allFilms).map((film) => {
							return character.films.includes(film.url) ? (
								<p className="text-gray-700" key={film.url}>
									{film.title}
								</p>
							) : null;
						})
					) : (
						<p className="text-red-400">No Files</p>
					)}
				</div>
			</div>

			{/* Starships Driven */}
			<div>
				<h4 className="mb-4 text-2xl font-semibold text-gray-800">
					Starships Driven
				</h4>
				<div>
					{character?.starships.length > 0 ? (
						Object.values(allStarships).map((starship) => {
							return character.starships.includes(starship.url) ? (
								<p className="text-gray-700" key={starship.url}>
									{starship.name}
								</p>
							) : null;
						})
					) : (
						<p className="text-red-400">No Starships</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default CharacterDetailCard;
