import { useContext, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import Products from "../../components/products/products";
import { GlobalContext } from "../../context/context";

function AllProducts() {
  const { fetchAllProducts, loading } = useContext(GlobalContext);

  useEffect(() => {
    fetchAllProducts(0);
  });

  if (loading) <h2>Loading items please wait!!</h2>;

  return (
    <div>
      <Navbar />
      <h1>all products</h1>
      <Products />
      <Footer />
    </div>
  );
}

export default AllProducts;
