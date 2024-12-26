import React, { useEffect } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";

// @TODO: Convert to a compound component to reuse

/**
 * CharacterCard component displays a character's information along with a button
 * that allows the user to trigger a callback function when clicked.
 *
 * @component
 * @param {Object} props - The props for the component.
 * @param {string} props.cid - The unique ID of the character.
 * @param {Function} props.handleClick - The callback function to be invoked when the button is clicked.
 * @param {string} [props.btnText="Select Card"] - The text to display on the button (default is "Select Card").
 *
 * @returns {JSX.Element} The rendered CharacterCard component.
 */
const CharacterCard: React.FC<{
	cid: string;
	handleClick: (id: string) => void;
	btnText: string;
}> = ({ cid, handleClick, btnText = "Select Card" }) => {
	// Fetch character and planet data from the stores
	const character = useCharacterStore((state) => state.characters[cid]);
	const planet = usePlanetStore((state) => state.planets[character?.planetId]);

	// Actions to fetch character and planet data by ID
	const getPlanetByCharacterId = usePlanetStore(
		(state) => state.getPlanetByCharacterId
	);
	const getCharacterById = useCharacterStore((state) => state.getCharacterById);

	/**
	 * Handles the click event for the "Details" button.
	 * Calls the `handleClick` function passed down as a prop with the character ID.
	 *
	 * @param {string} id - The character ID.
	 */
	const handleDetailsClick = (id: string) => {
		handleClick(id);
	};

	// Fetch character and planet data on component mount or when `cid` changes
	useEffect(() => {
		getCharacterById(cid);
		getPlanetByCharacterId(cid);
		// Disabling the eslint for to supress the warning, as not intended to add methods in dependency
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cid]);

	return (
		<li
			className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm"
			role="listitem"
			aria-labelledby={`character-${cid}`}
		>
			<div>
				<h2 id={`character-${cid}`} className="text-lg font-semibold ">
					{character?.name}
				</h2>
				<p className="text-sm text-gray-600 flex space-x-2">
					<span>Gender: {character?.gender}</span>
					<span>Home Planet: {planet?.name}</span>
				</p>
			</div>
			<button
				className="px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
				onClick={() => handleDetailsClick(cid)}
				aria-label={`View details for ${character?.name}`}
			>
				{btnText}
			</button>
		</li>
	);
};

export default CharacterCard;
