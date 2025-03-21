import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import MyHome from "./components/Home.jsx";
import Play from "./components/Play.jsx";
import About from "./components/About.jsx";
import MyNavbar from "./components/Navbar.jsx";
import Difficulty from "./components/Difficulty.jsx";
import MyQuestions from "./components/Questions.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/quizzler",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/quizzler",
        element: <MyHome />,
      },
      {
        path: "/quizzler/play",
        element: <Play />,
      },
      {
        path: "/quizzler/about",
        element: <About />,
      },
      {
        path: "/quizzler/play/:category",
        element: <Difficulty />,
      },
      {
        path: "/quizzler/play/:category/:difficulty",
        element: <MyQuestions />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
