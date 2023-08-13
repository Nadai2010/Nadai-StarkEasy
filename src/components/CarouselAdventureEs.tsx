import styled from "styled-components";
import StarkEasy from "../assets/CardLevel1Es.png";

const ImageContainer = styled.div`
  width: 80%;
  position: relative;
  overflow: hidden;
  border-radius: 20px; /* Ajusta esto para cambiar el redondeo de los bordes */
  cursor: pointer;

  img {
    width: 100%;
    height: 80vh;
    transition: transform 0.3s ease-in-out; /* Agregado para suavizar la transición */
  }

  &:hover img {
    transform: scale(1.05) translateX(5%); /* Efecto de zoom suave al pasar el cursor */
  }

  @media (max-width: 64em) {
    min-height: auto;
  }

  @media (max-width: 40em) {
    width: 70%;
    height: auto;
    align-items: center;
    margin-bottom: 1rem;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  right: 200px; /* Posición a la derecha */
  transform: translateY(-300%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 1rem;
  border-radius: 5px;
  font-size: 18px; /* Tamaño de fuente grande */
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  pointer-events: none; /* Evita que el tooltip interfiera con otros elementos */

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

const CarouselAdventureEs = () => {
  return (
    <ImageContainer>
      <img src={StarkEasy} alt="Stark Easy Cover" />
      <Tooltip>
      Hello Senseis!
        <br />
        I will show you what I can do!
      </Tooltip>
    </ImageContainer>
  );
};

export default CarouselAdventureEs;
