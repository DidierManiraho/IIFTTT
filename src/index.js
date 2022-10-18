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
import LoginPage from "./pages/LoginPage";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard"


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
                path: '/signup', element: <SignUp/>
            },
            {
                path: '/dashboard', element: <Dashboard/>
            },
            {
                path: '/login',
                element: <LoginPage/>
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


