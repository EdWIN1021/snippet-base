// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Note from "@/components/note.tsx";
import App from "./App.tsx";
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/notes/:noteId",
        element: <Note />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
