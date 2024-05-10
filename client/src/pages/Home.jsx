import ProductCard from "../components/Card";
import CarouselFadeExample from "../components/Carousel";
// import ExampleCarouselImage from "../assets/images"

const Home = () => {
  const products = [
    {
      //link, image, title, text
      link: "/products/1",
      image: "./images/WhiteHoodieProd.png",
      title: "Basketball",
      text: "This is a good basketball",
    },
    {
      //link, image, title, text
      link: "/products/2",
      image:
        // "../assets/images/ExampleCarouselImage.svg"
        "./images/WhiteTshirtProd.png",
      title: "Volleyball",
      text: "This is a good volleyball",
    },
    {
      //link, image, title, text
      link: "/products/3",
      image:
        // "../assets/images/ExampleCarouselImage.svg"
        "./images/MugProd.png",
      title: "Mug",
      text: "This is a good volleyball",
    },
    {
      //link, image, title, text
      link: "/products/4",
      image:
        // "../assets/images/ExampleCarouselImage.svg"
        "./images/CoffeeProd.png",
      title: "Mug",
      text: "This is a good volleyball",
    },
    {
      //link, image, title, text
      link: "/products/4",
      image:
        // "../assets/images/ExampleCarouselImage.svg"
        "./images/MugProd_2.png",
      title: "Mug",
      text: "This is a good volleyball",
    },
    {
      //link, image, title, text
      link: "/products/4",
      image:
        // "../assets/images/ExampleCarouselImage.svg"
        "./images/WaterBottleProd.png",
      title: "Mug",
      text: "This is a good volleyball",
    },
  ];

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
      <div className="container d-flex justify-content-around">
        {products ? (
          products.map((product) => (
            <ProductCard
              link={product.link}
              image={product.image}
              title={product.title}
              text={product.text}
              key={product.link}
            />
          ))
        ) : (
          <div>loading... </div>
        )}
      </div>
    </div>
  );
};

export default Home;
