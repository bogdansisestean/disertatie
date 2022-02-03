import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const getUser = useSelector((state) => state.loggedUser);

  const { user, loggedIn } = getUser;
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, []);
  
  if (products) {
    return (
      <div className="homescreen">
        <h2 className="homescreen__title">Product Feed</h2>
        <div className="homescreen__products">
          {loading ? (
            <h2>Loading...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            products.map((product) => (
              <Product
                key={product._id}
                name={product.name}
                description={product.description}
                price={product.price}
                imageUrl={product.imageUrl}
                productId={product._id}
              />
            ))
          )}
          {}
        </div>
      </div>
    );
  } else {
    return <p>loading...</p>;
  }
}

export default HomeScreen;
