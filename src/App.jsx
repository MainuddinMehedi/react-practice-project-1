import { Route, Routes, useRoutes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/home/home";
import NotFoundPage from "./pages/not-found/not-found";
import AllProducts from "./pages/all-products/all-products";
import AboutPage from "./pages/about/about";
import CartPage from "./pages/cart/cart";
import ProductDetails from "./pages/product-details/products-details";

function App() {
  function CustomRoutes() {
    const allRoutes = useRoutes([
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ]);

    return allRoutes;
  }

  return (
    <div>
      {/* <Routes>
        <Route path="/home" element={<HomePage />} />
        </Routes> */}

      <CustomRoutes />
    </div>
  );
}

export default App;
