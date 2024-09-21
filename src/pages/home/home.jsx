import Footer from "../../components/footer/footer";
import "./home.css";
import Navbar from "../../components/navbar/navbar";
import Products from "../../components/products/products";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";

function HomePage() {
  const { fetchAllProducts, loading } = useContext(GlobalContext);

  useEffect(() => {
    fetchAllProducts(9);
  });

  if (loading) <h2>Loading items please wait!!</h2>;

  return (
    <div className="home">
      <Navbar />
      <div className="header">
        <div className="header-box">
          <h2>This is home page of my practice project 1</h2>
          <div className="box">
            <h3>there goes a slidebox or something</h3>
          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

export default HomePage;
