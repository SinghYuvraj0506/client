import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
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
      ],
    },
  ]);

  return (
    <div className="w-full relative bg-white">
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
