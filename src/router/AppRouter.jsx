import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>Home</h1>
    },
    {
        path: 'about',
        element: <h1>About</h1>
    },
    {
        path: 'skills',
        element: <h1>Skills</h1>
    },
    {
        path: 'projects',
        element: <h1>Projects</h1>
    }
])

export const AppRouter = () => {
  return <RouterProvider router={router}/>
}
