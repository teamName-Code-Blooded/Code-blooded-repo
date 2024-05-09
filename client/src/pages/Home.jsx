import ProductCard from "../components/Card";
import CarouselFadeExample from "../components/Carousel";
// import ExampleCarouselImage from "../assets/images"

const Home = () => {
  const products = [
    {
      //link, image, title, text
      link: "/products/1",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png",
      title: "Basketball",
      text: "This is a good basketball",
    },
    {
      //link, image, title, text
      link: "/products/2",
      image:
        // "../assets/images/ExampleCarouselImage.svg"
        "https://m.media-amazon.com/images/I/51-ruKlRJRL._AC_UF1000,1000_QL80_.jpg",
      title: "Volleyball",
      text: "This is a good volleyball",
    },
  ];

  return (
    //attach carousel here

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
  );
};

export default Home;
