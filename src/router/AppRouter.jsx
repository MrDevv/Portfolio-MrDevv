import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../features/home/Home";
import { About } from "../features/About/About";
import { Skills } from "../features/Skills/Skills";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    }
])

export const AppRouter = () => {
  return <RouterProvider router={router}/>
}
