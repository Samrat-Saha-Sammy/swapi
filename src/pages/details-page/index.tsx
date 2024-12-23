import React from "react";
import { useParams } from "react-router-dom";
import CharacterDetailCard from "../../components/character-detail-card";
interface Params extends Record<string, string | undefined> {
	id: string;
}

const DetailsPage: React.FC = () => {
	const { id } = useParams<Params>(); // Extract the `id` parameter
	return <>{id && <CharacterDetailCard cid={id} />}</>;
};

export default DetailsPage;
