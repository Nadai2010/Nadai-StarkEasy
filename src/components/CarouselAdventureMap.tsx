import styled from "styled-components";
import StarkEasy from "../assets/MapLevelEn.png";

const ImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 100vh;
    border-radius: 0px; /* adjust this to achieve desired roundness */
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;

const CarouselAdventureMapEs = () => {
  return (
    <ImageContainer>
      <img src={StarkEasy} alt="Stark" />
    </ImageContainer>
  );
};

export default CarouselAdventureMapEs;
