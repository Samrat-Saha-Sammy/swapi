import React from "react";
import { useParams } from "react-router-dom";
import CharacterDetailView from "../../components/character-detail-view";
interface Params extends Record<string, string | undefined> {
	id: string;
}

const DetailsPage: React.FC = () => {
	const { id } = useParams<Params>(); // Extract the `id` parameter

	// useEffect(() => {
	//   debugger;
	//   if (character?.films) {
	//     const filmIdAry = extractLastParamsFromURLArray(character?.films);
	//     const filmObjAry = filmIdAry.map((filmId) => {
	//       return allFilms[filmId];
	//     });
	//     setFilms(filmObjAry);
	//   }
	// }, [character?.films, allFilms]);

	return (
		<div>
			<h1>Details Page {id}</h1>
			{id && <CharacterDetailView cid={id} />}
		</div>
	);
};

export default DetailsPage;
