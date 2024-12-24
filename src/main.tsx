import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./main.css";
import App from "./pages/root/App.tsx";
import React from "react";

/**
 * Entry point for the React application.
 * This code initializes and renders the root component of the application.
 */
createRoot(document.getElementById("root")!).render(
	/**
	 * StrictMode helps to identify potential problems in an application by intentionally double-rendering components in development.
	 * It provides additional checks and warnings in the development environment.
	 */

	<StrictMode>
		<BrowserRouter>
			{/* The main App component is rendered inside the Router */}
			<App />
		</BrowserRouter>
	</StrictMode>
);
