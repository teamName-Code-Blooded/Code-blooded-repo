import { useState } from "react";
import ProductCard from "../components/Card";
import CarouselFadeExample from "../components/Carousel";
import FooterMain from "../components/Footer";
import { Row, Container } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { QUERY_ITEMS } from "../utils/queries";
// import ExampleCarouselImage from "../assets/images"

const Home = () => {
  // const products = [
  //   {
  //     //link, image, title, text
  //     link: "/products/1",
  //     image: "./images/WhiteHoodieProd.png",
  //     title: "Basketball",
  //     text: "This is a good basketball",
  //   },
  //   {
  //     //link, image, title, text
  //     link: "/products/2",
  //     image:
  //       // "../assets/images/ExampleCarouselImage.svg"
  //       "./images/WhiteTshirtProd.png",
  //     title: "Volleyball",
  //     text: "This is a good volleyball",
  //   },
  //   {
  //     //link, image, title, text
  //     link: "/products/3",
  //     image:
  //       // "../assets/images/ExampleCarouselImage.svg"
  //       "./images/MugProd.png",
  //     title: "Mug",
  //     text: "This is a good volleyball",
  //   },
  //   {
  //     //link, image, title, text
  //     link: "/products/4",
  //     image:
  //       // "../assets/images/ExampleCarouselImage.svg"
  //       "./images/CoffeeProd.png",
  //     title: "Mug",
  //     text: "This is a good volleyball",
  //   },
  //   {
  //     //link, image, title, text
  //     link: "/products/4",
  //     image:
  //       // "../assets/images/ExampleCarouselImage.svg"
  //       "./images/MugProd_2.png",
  //     title: "Mug",
  //     text: "This is a good volleyball",
  //   },
  //   {
  //     //link, image, title, text
  //     link: "/products/4",
  //     image:
  //       // "../assets/images/ExampleCarouselImage.svg"
  //       "./images/WaterBottleProd.png",
  //     title: "Mug",
  //     text: "This is a good volleyball",
  //   },
  // ];
  const [items, setItems] = useState([]);

  const { loading, data } = useQuery(QUERY_ITEMS);

  const products = data?.getItems || [];
  console.log(products);
  console.log(data);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    //attach carousel here
    <div>
      <CarouselFadeExample />
      <div className="container d-flex justify-content-around">
        <img
          src="./images/ProductsFont.png"
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
            products.map((product) => (
              <ProductCard
                // link={product.price}
                image={product.image}
                name={product.name}
                text={product.description}
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

export default Home;
