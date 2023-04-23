import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from './App'
import Home from './screens/Home';
import EventDetails from './screens/EventDetails';
import EventApp from './EventApp';
import Event from './screens/Event';


// Based on https://reactrouter.com/en/main/start/tutorial

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    // Place app screens here
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/event",
        element: <Event />,
      },
    ],
  },
  {
    path: "/eventDetails",
    element: <EventApp />,
    children: [
      {
        path: "/eventDetails",
        element: <EventDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
