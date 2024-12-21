import React from "react";
import { useParams } from "react-router-dom";
import useCharacterStore from "../../stores/store-character";

interface Params extends Record<string, string | undefined> {
  id: string;
}

const DetailsPage: React.FC = () => {
  const { id } = useParams<Params>(); // Extract the `id` parameter
  const character = useCharacterStore((state) =>
    id && state.characters[id] ? state.characters[id] : null
  );

  return (
    <div>
      <h1>Details Page {id}</h1>
      <p>{JSON.stringify(character)}</p>
    </div>
  );
};

export default DetailsPage;
