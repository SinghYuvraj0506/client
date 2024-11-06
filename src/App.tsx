import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import ParentLayout from "./layouts/ParentLayout";
import PaymentStatus from "./pages/PaymentStatus";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ParentLayout />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "products",
          children: [
            {
              index: true,
              element: <ProductsPage />,
            },
            {
              path: ":id",
              element: <ProductDetail />,
            },
          ],
        },
        {
          path: "cart",
          element: <ShoppingCart />,
        },
        {
          path: "payment",
          element: <PaymentStatus />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
