import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/context";
import "./products.css";
import ProductItem from "./product-item";

function Products() {
  const { products, loading } = useContext(GlobalContext);

  // console.log(products[0].id);
  // console.log(products.length)

  // if (loading) <h2>Loading items please wait!!</h2>;

  return (
    <div className="product-section">
      <div className="product-tile">
        {products && products?.length > 0 ? (
          products.map((eachProduct) => (
            <ProductItem
              eachProduct={eachProduct}
              loading={loading}
              key={eachProduct?.id}
            />
          ))
        ) : (
          <h2>no products found</h2>
        )}
      </div>
    </div>
  );
}

export default Products;
