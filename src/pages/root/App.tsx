import React, { lazy, Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import NotFoundPage from "../404-page";
// Lazy-loaded Pages
const ListPage = lazy(() => import("../list-page"));
const DetailsPage = lazy(() => import("../details-page"));
const FavouritesPage = lazy(() => import("..//favourites-page"));

const App: React.FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<ListPage />} />
					<Route path="/details/:id" element={<DetailsPage />} />
					<Route path="/liked" element={<FavouritesPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
			</Routes>
		</Suspense>
	);
};

export default App;
