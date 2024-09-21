import { useNavigate } from "react-router-dom";
import "./product-item.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

function ProductItem({ eachProduct }) {
  // console.log(eachProduct);

  const {handleAddToCart, productDetails} = useContext(GlobalContext);
  const navigate = useNavigate();
  

  return (
    <div className="product-card">
      <div
        className="title-thumbnail"
        onClick={() => {
          navigate(`/product-details/${eachProduct?.id}`);
        }}
      >
        <h3>{eachProduct?.title}</h3>
        <img src={eachProduct?.thumbnail} alt={eachProduct?.title} />
      </div>
      <div className="product-details">
        <p>Brand: {eachProduct?.brand}</p>
        <p>Price: {eachProduct?.price}</p>
        <p>Rating: {eachProduct?.rating}</p>
        <p>Discount: {eachProduct?.discountPercentage}%</p>
      </div>
      <button>Buy</button>
      <button onClick={() => handleAddToCart(productDetails) }>Add to cart</button>
    </div>
  );
}

export default ProductItem;
