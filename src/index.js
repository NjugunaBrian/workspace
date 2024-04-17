import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import './App.css';
import App from './App';
import Signin from './Pages/Signin';
import Login from './Pages/Login';
import { AuthProvider } from './context/authContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "login",
    element: <Login />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);


