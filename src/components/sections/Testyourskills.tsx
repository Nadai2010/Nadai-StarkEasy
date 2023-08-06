import styled from "styled-components";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Avatar2 from "/src/assets/Terminal.png";

const CarouselContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(180deg, #ffffff 0%, #fbb03b 100%);
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  outline: none;
  padding: 20px;
`;

const SlideImage = styled.img`
  width: 70%;
  max-height: 50vh;
  object-fit: contain;
  cursor: pointer;
  border-radius: 15px;
  margin: 0px auto 5px; /* Ajuste de espacio entre título y imagen */
`;

const SlideTitle = styled.h1`
  font-size: 56px;
  color: ${(props) => props.theme.text};
  margin: 60px 5px 0; /* Ajuste de margen superior e inferior */
  text-align: center;
  text-transform: capitalize;
`;

const SlideTitle2 = styled.h2`
  font-size: 36px;
  color: ${(props) => props.theme.text};
  margin: 0px; /* Ajuste de espacio entre subtítulo y imagen */
  text-align: center;
`;

const DotsContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

const TestYourSkills = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    prevArrow: <></>,
    nextArrow: <></>,
    infinite: true, // Carrusel infinito
  };

  return (
    <CarouselContainer>
      <SlideTitle>Stark Easy</SlideTitle>
      <Slider {...settings}>
        <Slide>
          <SlideTitle2>Cairo Sintaxis</SlideTitle2>
          <SlideImage src={Avatar2} alt="Stark Easy card" />
        </Slide>
        <Slide>
          <SlideTitle2>Cairo Contract</SlideTitle2>
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

export default TestYourSkills;
