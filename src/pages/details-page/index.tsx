import React from "react";
import { useParams } from "react-router-dom";
import CharacterDetailCard from "../../components/character-detail-card";

/**
 * Params interface defines the shape of the route parameters used in the component.
 * It ensures the `id` parameter is a string or undefined.
 */
interface Params extends Record<string, string | undefined> {
	id: string;
}

/**
 * DetailsPage component fetches and displays the detailed information of a character.
 * It extracts the `id` parameter from the URL and passes it as a prop to the `CharacterDetailCard` component.
 *
 * @component
 * @returns {JSX.Element} The rendered DetailsPage component with the character's details.
 */
const DetailsPage: React.FC = () => {
	const { id } = useParams<Params>(); // Extract the `id` parameter
	return <>{id && <CharacterDetailCard cid={id} />}</>;
};

export default DetailsPage;
