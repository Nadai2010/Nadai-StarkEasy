import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Heroe2 from "../assets/Heroe2.png";
import Heroe6 from "../assets/Heroe6.png";
import Heroe7 from "../assets/Heroe7.png";

const CarouselContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
`;

const Slide = styled.div`
  width: 40%;
  height: 90vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  padding: 10px;
  margin-top: 4rem;

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    margin-top: 4rem;
    padding: 20px;
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80%; /* Ajusta la altura de la imagen en móviles */
  object-fit: contain;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    max-height: 50%; /* Ajusta la altura máxima de la imagen en dispositivos móviles */
  }

`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  margin: 0 auto;
  text-align: center;
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
          <SlideImage src={Heroe2} alt="Stark Easy card" />
        </Slide>
        <Slide>
          <SlideImage src={Heroe6} alt="Stark Easy card" />
        </Slide>
        <Slide>
          <SlideImage src={Heroe7} alt="Stark Easy card" />
        </Slide>
      </Slider>
      <DotsContainer>
        <Slider {...settings} />
      </DotsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
