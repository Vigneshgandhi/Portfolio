import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certifications from "./pages/Certificate";
import ProjectDetails from "./pages/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path:"certificate",
        element: <Certifications />
      },
      {
        path:"/projects/:id",
        element:<ProjectDetails/>
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;