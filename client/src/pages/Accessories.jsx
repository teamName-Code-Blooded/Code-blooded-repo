import { useState } from "react";
import ProductCard from "../components/Card";
import FooterMain from "../components/Footer";
import { Row, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";

const Accessories = () => {
  const [items, setItems] = useState([]);

  const { loading, data } = useQuery(QUERY_ITEMS);

  const products = data?.getItems || [];
  console.log(products);
  console.log(data);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <div className="container d-flex justify-content-around">
        <img
          src="./images/AccessoriesFont.png"
          style={{
            height: "100px",
            margin: "30px",
          }}
        ></img>
        {/* <img
        src="./images/WhiteTshirtModel_2.png"
        style={{
          height: "500px",
          width: "100%",
          objectFit: "fill",
          maxWidth: "100%",
        }}
      ></img> */}
      </div>
      <div className="d-flex justify-content-center">
        <Container className="d-flex justify-content-center row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
          {products ? (
            products
              .filter(
                (product) => product.category._id === "66418737b612788c43324a71"
              )
              .map((product) => (
                <ProductCard
                  // link={product.price}
                  image={product.image}
                  name={product.name}
                  text={product.description}
                  // category={product.category}
                  price={product.price}
                  key={product._id}
                  id={product._id}
                />
              ))
          ) : (
            <div>loading... </div>
          )}
        </Container>
      </div>

      <FooterMain />
    </div>
  );
};

export default Accessories;
