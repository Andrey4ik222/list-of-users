import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "albums/:userId",
    element: <Albums />,
  },
  {
    path: "photo/:albumId",
    element: <Photos />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
