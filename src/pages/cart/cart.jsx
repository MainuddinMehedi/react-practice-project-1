import { useContext } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/navbar";
import { GlobalContext } from "../../context/context";
import "./cart.css";

function CartPage() {
  const { cartItems } = useContext(GlobalContext);

  console.log(cartItems);
  return (
    <div>
      <Navbar />
      <h1>CartPage</h1>
      <div className="cart-container">
        <div className="items-info">
          <div>
            <img src={cartItems?.thumbnail} alt={cartItems?.title} />
          </div>
          <div>
            <p>Price: {cartItems?.price}</p>
          </div>
          <div>
            <p>quantity: {cartItems.length} </p>
          </div>
          <div>
            <p style={{cursor:'pointer'}}>remove</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
