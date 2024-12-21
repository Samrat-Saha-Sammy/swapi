import React from "react";
import useAppStore from "../../stores/store-app";
import CharacterListView from "../character-list-view";

const CharactersList: React.FC = () => {
  const displayBatchIds = useAppStore((state) => state.displayBatchIds);

  return (
    <ul className="space-y-4">
      {displayBatchIds.map((value, key) => {
        return <CharacterListView key={key} cid={value} />;
      })}
    </ul>
  );
};

export default CharactersList;
