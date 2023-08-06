import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Avatar2 from "../assets/Avatar2.png";

const CarouselContainer = styled.div`
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden; /* Agregar overflow para manejar el contenido */
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  padding: 10px;
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.5);
  }
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const Carousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: <></>,
    nextArrow: <></>,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        <Slide>
          <SlideImage src={Avatar2} alt="Stark Easy card" />
        </Slide>
        <Slide>
          <SlideImage src={Avatar2} alt="Stark Easy card" />
        </Slide>
        {/* ... otras diapositivas ... */}
      </Slider>
      <DotsContainer>
        <Slider {...settings} />
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
