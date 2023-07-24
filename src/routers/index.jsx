import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages";
import About from "../pages/About";
import Blog from "../pages/blogs";
import Post from "../pages/blogs/_id";

import { posts, postById } from "../apis/loaders";
import ErrorPage from "../components/ErrorPage";

import RootLayout from "../layouts/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Homepage/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/blog/:id",
                element: <Post/>,
                loader:postById
            },
            {
                path: "/blog",
                element: <Blog/>,
                loader:posts
            }
        ]
    },
]);
