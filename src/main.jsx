import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/Home.jsx";
import App from "./routes/App.jsx";

const routeArr = [
  {
    path: "/",
    element: <App />,
    // errElement:
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

// const container = document.getElementById("root");
// let root = container._reactRootContainer;

// if (!root) {
//   root = ReactDOM.createRoot(container);
//   container._reactRootContainer = root;
// }

const router = createBrowserRouter(routeArr);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
