import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import ProductPage from "./pages/ProductPage";
import ProductInfoPage from "./pages/ProductInfoPage";
import CartPage from "./pages/CartPage";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products',
    element: <ProductPage />,
  },
  {
    path: '/products/:id',
    element: <ProductInfoPage />,
  },
  {
    path: '/cart',
    element: <CartPage />,
  },
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  );
}