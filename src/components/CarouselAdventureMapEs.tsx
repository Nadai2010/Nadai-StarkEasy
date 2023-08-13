import styled from "styled-components";
import StarkEasy from "../assets/MapLevelEs.png";

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

const CarouselAdventure = () => {
  return (
    <ImageContainer>
      <img src={StarkEasy} alt="Stark Easy Cover" />
    </ImageContainer>
  );
};

export default CarouselAdventure;