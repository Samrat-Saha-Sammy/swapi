import React, { useEffect } from "react";
import useAppStore from "../../stores/store-app";
import CharactersList from "../../components/character-list";

const ListPage: React.FC = () => {
  const fetchDisplayBatchIds = useAppStore(
    (state) => state.fetchDisplayBatchIds
  );

  useEffect(() => {
    fetchDisplayBatchIds();
  }, []);

  return (
    <>
      {/* <!-- Header Section --> */}

      {/* <!-- Search Bar --> */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search items..."
          className="flex-grow rounded-lg border border-gray-300 p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* <!-- Items List --> */}
      <CharactersList />

      {/* <!-- Pagination --> */}
      {/* <div className="flex items-center justify-between text-gray-600">
            <p className="text-sm">
              Showing <span className="font-semibold">1-10</span> of{" "}
              <span className="font-semibold">50</span> records
            </p>
            <div className="flex space-x-2">
              <button className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Previous
              </button>
              <button className="rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Next
              </button>
            </div>
          </div> */}

      {/* <h1>List Page</h1>
      {/* Search Component */}
      {/* <CharactersList /> */}
      {/* Pagination Component */}
      {/* <NotFoundPage /> */}
    </>
  );
};

export default ListPage;
