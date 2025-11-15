import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./global.css";

import Home from "./routes/Home/index.tsx";
import Faq from "./routes/Faq/index.tsx";
import Contato from "./routes/Contato/index.tsx";
import Error from "./routes/Error/index.tsx";
import Equipe from "./routes/Equipe/index.tsx";
import Sobre from "./routes/Sobre/index.tsx";
import Login from "./routes/Login/index.tsx";
import Cadastro from "./routes/Cadastro/index.tsx";
import BoasVindas from "./routes/Boas-vindas/index.tsx";

import CursoSemana from "./routes/Curso/index.tsx";
import Feedback from "./routes/Feedback/index.tsx";

import ProtectedRoute from "./routes/ProtectedRoute/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/boas-vindas", element: <BoasVindas /> },
      {
        path: "/curso-semana",
        element: (
          <ProtectedRoute>
            <CursoSemana />
          </ProtectedRoute>
        ),
      },
      {
        path: "/feedback",
        element: (
          <ProtectedRoute>
            <Feedback />
          </ProtectedRoute>
        ),
      },
      { path: "/faq", element: <Faq /> },
      { path: "/contato", element: <Contato /> },
      { path: "/equipe", element: <Equipe /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/login", element: <Login /> },
      { path: "/cadastro", element: <Cadastro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
