import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/context";
import "./product-details.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";

function ProductDetails() {
  const { productDetails, setProductDetails, loading, handleAddToCart } =
    useContext(GlobalContext);
  const { id } = useParams();

  // console.log('id in products details page', id)

  function fetchProductDetails() {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductDetails(data);
      });
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) <h1>Loading data! please wait.</h1>;
  // console.log(productDetails);

  return (
    <div>
      <Navbar />
      <h1>Products Detail Page</h1>
      <div className="container">
        <div className="details">
          <div className="image-div">
            <div>
              <img src={productDetails?.thumbnail} alt="" />
              <h3>{productDetails?.title}</h3>
            </div>
            <div className="more-images">
              {productDetails?.images?.length
                ? productDetails?.images.map((singleImage) => (
                    <div
                      className="little-image-div"
                      key={productDetails?.singleImage}
                    >
                      <img
                        src={singleImage}
                        className="little-image"
                        alt={productDetails?.title}
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>

          <div className="info-div">
            <h3>{productDetails?.title}</h3>

            <div className="info">
              {/* <div className="names">
                <p>:</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div> */}
              <div>
                <p>Brand:{productDetails?.brand}</p>
                <p>Category:{productDetails?.category}</p>
                <p>Price:{productDetails?.price}</p>
                <p>Rating:{productDetails?.rating}</p>
                <p>Return Policy:{productDetails?.returnPolicy}</p>
                <p>Shipping:{productDetails?.shippingInformation}</p>
                <p>Stock:{productDetails?.stock}</p>
                <p>Warranty:{productDetails?.warrantyInformation}</p>
                <p>Weight:{productDetails?.weight}</p>
              </div>
            </div>

            <button
              style={{ backgroundColor: "#01010aa1", margin: ".4em 2em" }}
            >
              Buy Now
            </button>
            <button
              onClick={() => handleAddToCart(productDetails)}
              style={{ backgroundColor: "#01010aa1" }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductDetails;
