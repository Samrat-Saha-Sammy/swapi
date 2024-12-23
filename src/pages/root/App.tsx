import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import NotFoundPage from "../404-page";

// Lazy-loaded Pages
const ListPage = lazy(() => import("../list-page"));
const DetailsPage = lazy(() => import("../details-page"));
const FavouritesPage = lazy(() => import("..//favourites-page"));

/**
 * App component serves as the main entry point of the application.
 * It configures the routes for the application using `react-router-dom`,
 * including lazy-loaded pages for efficient loading. The component also
 * uses the `Suspense` component to display a loading state while the routes
 * are being loaded.
 *
 * @component
 * @returns {JSX.Element} The rendered App component with routing and layouts.
 */
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
