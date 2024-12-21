import React, { useEffect } from "react";
import useCharacterStore from "../../stores/store-character";
import usePlanetStore from "../../stores/store-planet";
import { useNavigate } from "react-router-dom";

interface Props {
  cid: string;
}

const CharacterListView: React.FC<Props> = ({ cid }) => {
  const navigate = useNavigate();
  const character = useCharacterStore((state) => state.characters[cid]);
  const planet = usePlanetStore((state) =>
    character && character.homeWorldId !== null
      ? state.planets[character.homeWorldId!]
      : null
  );

  const getCharacterById = useCharacterStore((state) => state.getCharacterById);

  const handleDetailsClick = (id: string) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    getCharacterById(cid);
  }, [cid]);

  return (
    <li className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">{character?.name}</h2>
        <span className="text-sm text-gray-600">
          {`Gender: ${character?.gender}`}
        </span>
        <span className="text-sm text-gray-600">
          {" "}
          {`Home Planet: ${planet?.name}`}
        </span>
      </div>
      <button
        className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        onClick={() => handleDetailsClick(cid)}
      >
        View Details
      </button>
    </li>
  );
};

export default CharacterListView;
