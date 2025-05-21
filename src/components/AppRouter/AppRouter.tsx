// AppRouter.tsx
import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTES from "@/router";

const AppRouter: React.FC = () => {
  const router = createBrowserRouter(ROUTES);
  return <RouterProvider router={router}/>;
};

export default AppRouter;
