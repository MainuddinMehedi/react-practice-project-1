import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

// create the context
export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  function fetchAllProducts(limit = 0) {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data?.products) setProducts(data?.products);
        setLoading(false);
      });
  }

  function handleAddToCart(productDetails) {
    if (productDetails) {
      navigate("/cart");
      setCartItems(productDetails);
    }

    // if(id) {
    //   console.log(id)
    // }
    // console.log(eachProduct);
    console.log(cartItems, "cartitem");
  }

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        products,
        loading,
        fetchAllProducts,
        productDetails,
        setProductDetails,
        cartItems,
        setCartItems,
        handleAddToCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
