import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AppletPage from "./pages/AppletPage";
import DevelopersPage from "./pages/DevelopersPage";
import ExplorePage from "./pages/ExplorePage";
import NewStoryPage from "./pages/NewStoryPage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,

        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/applets',
                element: <AppletPage/>,

            },
            {
                path: '/developers',
                element: <DevelopersPage/>
            },
            {
                path: '/explore',
                element: <ExplorePage/>
            },
            {
                path: '/new-story',
                element: <NewStoryPage/>
            },

        ]
    },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);


