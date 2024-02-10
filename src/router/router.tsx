import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import Layout from "../components/Layout.tsx";
import Login from "../pages/Login/Login.tsx";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/produit/:id",
            element: <ProductDetail />,
         },
         {
            path: "/admin",
            element: <Login />,
         },
      ],
   },
]);
