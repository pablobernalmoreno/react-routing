import "./App.css";
import { About } from "./pages/About";
import { Users } from "./pages/Users";
import { Home } from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorHandler } from "./pages/ErrorHandler";
import { User } from "./pages/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorHandler />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/users",
      element: <Users />,
    },
    {
      path: "/users/:userId",
      element: <User />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
