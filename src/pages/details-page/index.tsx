import React from "react";
import { useParams } from "react-router-dom";
import CharacterDetailView from "../../components/character-detail-view";
interface Params extends Record<string, string | undefined> {
	id: string;
}

const DetailsPage: React.FC = () => {
	const { id } = useParams<Params>(); // Extract the `id` parameter
	return <>{id && <CharacterDetailView cid={id} />}</>;
};

export default DetailsPage;
