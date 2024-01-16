import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home.tsx";
import ProductDetail from "../pages/ProductDetail.tsx";
import Layout from "../components/Layout.tsx";

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
      ],
   },
]);
