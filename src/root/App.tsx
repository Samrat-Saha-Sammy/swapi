import React from "react";
import "./App.css";
import ListPage from "../pages/list-page";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/404-page";
import DetailsPage from "../pages/details-page";
import FavouritesPage from "../pages/favourites-page";
import MainLayout from "../pages/layouts/main-layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<ListPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/liked" element={<FavouritesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
    </Routes>
  );
};

export default App;
