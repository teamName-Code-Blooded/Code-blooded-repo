import Carousel from "react-bootstrap/Carousel";
// import ToteBagModel from "./images/ToteBagModel.jpg";

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        {/* <ToteBagModel text="First slide" /> */}
        <img
          src="./images/ToteBagModel_2.jpg"
          style={{
            height: "500px",
            width: "100%",
            objectFit: "fill",
            maxWidth: "100%",
          }}
        ></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ToteBagModel text="Second slide" /> */}
        <img
          src="./images/WhiteTshirtModel_2.png"
          style={{
            height: "500px",
            width: "100%",
            objectFit: "fill",
            maxWidth: "100%",
          }}
        ></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ToteBagModel text="Third slide" /> */}
        <img
          src="./images/WhiteLongSleeveModel_2.png"
          style={{
            height: "500px",
            width: "100%",
            objectFit: "fill",
            maxWidth: "100%",
          }}
        ></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
