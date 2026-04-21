import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import ErrorPage from '../Pages/ErrorPage';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Services from '../Pages/Services';
import Connections from '../Pages/Connections';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import AboutGame from '../Pages/AboutGame';
import PrivateRoute from '../Contexts/PrivateRoute';
import PasswordRest from '../Pages/PasswordRest';
import UpdateUser from '../Pages/UpdateUser';
import MyProfile from '../Pages/MyProfile';
import AllGames from '../Pages/AllGames';

 const Router = createBrowserRouter([
   {
     path: "/",
     Component: MainLayout,
     children: [
       {
         path: "",
         Component: Home,
       },
       {
         path: "/allGames",
         Component: AllGames,
       },
       {
         path: "/about",
         Component: AboutUs,
       },
       {
         path: "/services",
         Component: Services,
       },
       {
         path: "/connections",
         Component: Connections,
       },
       {
         path: "/auth/login",
         Component: LoginPage,
       },
       {
         path: "/auth/register",
         Component: RegisterPage,
       },
       {
         path: "/passwordRest",
         Component: PasswordRest,
       },
       {
         path: "/myProfile",
         Component: MyProfile,
       },
       {
         path: "/updateProfile",
         Component: UpdateUser,
       },
       {
         path: "/aboutGame/:id",
         element: <AboutGame></AboutGame>,
       },
     ],
   },

   {
     path: "/*",
     Component: ErrorPage,
   },
 ]);

export default Router;