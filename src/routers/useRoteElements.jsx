import React from "react";
import { useRoutes } from "react-router-dom";
import {PATH} from "./path";

import AuthLayout from "../layout/AuthLayout/AuthLayout";
import MainLayout from "../layout/MainLayout/MainLayout";
import AdminLayout from "../layout/AdminLayout/AdminLayout";

import LoginPage from "../modules/auth/auth/Login/LoginPage";
import RegisterPage from "../modules/auth/auth/Register/RegisterPage";
import HomePage from "../modules/home/HomePage/HomePage";

export default function useRoteElements() {
  const element = useRoutes([
    // auth
    {
        path: PATH.AUTH,
        element: <AuthLayout />,
        children: [
          {
            path: PATH.LOGIN,
            element: <LoginPage />
          },
          {
            path: PATH.REGISTER,
            element: <RegisterPage />
          },
        ],
      },

    // user
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },

    //admin
    {
      path: PATH.ADMIN,
      element: <AdminLayout />,
      children: [
        {
          index: true,
          element: <div>Admin Overview</div>,
        },
      ],
    },


  ]);


  
  return element;
}
