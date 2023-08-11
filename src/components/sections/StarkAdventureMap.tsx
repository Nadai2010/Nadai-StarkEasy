import { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import About from "./About";
import Level1 from "../level1/Level1";
import ReactModal from "react-modal";

const CarouselAdventureMap = lazy(() => import("../CarouselAdventureMap"));


const Section = styled.section`
  min-height: calc(100vh - ${(props) => props.theme.navHeight});
  width: 100vw;
  position: fixed;
  background-color: ${(props) => props.theme.body};
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 2rem;
`;

const Card = styled.div`
  width: 100px;
  height: ${(props: { height: number }) => props.height}px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 20%;
  left: 13%;
  

  &:hover {
    transform: translateX(150%) translateY(40%) scale(2.5);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Card2 = styled.div`
  width: 100px;
  height: ${(props: { height: number }) => props.height}px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 13%;
  right: 15%;
  

  &:hover {
    transform: translateX(-150%) translateY(+60%) scale(2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Card3 = styled.div`
  width: 170px;
  height: ${(props: { height: number }) => props.height}px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 30%;
  left: 40%;
  

  &:hover {
    transform: translateY(-0%) scale(2.1);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Card4 = styled.div`
  width: 120px;
  height: ${(props: { height: number }) => props.height}px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 65%;
  right: 15%;
  

  &:hover {
    transform: translateY(-30%) translateX(-90%) scale(2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const NavigationBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;

  button {
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: ${(props) => props.theme.primary};
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Modal = styled(ReactModal)`
/* Estilos para tu modal aquí */
overflow-x: hidden;
overflow-y: auto; /* Agrega overflow-y para permitir el desplazamiento vertical */
max-height: 110vh; /* Limita la altura máxima del modal para que no cubra toda la pantalla */
`;

const StarkAdventure = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleCardClick = (content:any) => {
    setIsModalOpen(true);
    setModalContent(content);
  };




  return (
    <Section id="home">
      <Container>
        <Suspense fallback={<Loading />}>
          <CarouselAdventureMap />
          <CardContainer>

            <Card
              height={160}
              onClick={() => handleCardClick(<Level1 />)}
            >
              <img src="src/assets/CardLevel1_1.png" alt="Image description" />
            </Card>
            <Card2
              height={160}
              onClick={() => handleCardClick(<About />)}
            >
              <img src="src/assets/CardLevel1.png" alt="Image description" />
            </Card2>
            <Card3
              height={250}
              onClick={() => handleCardClick(<About />)}
            >
              <img src="src/assets/CardLevel1_2.png" alt="Image description" />
            </Card3>
            <Card4
              height={190}
              onClick={() => handleCardClick(<About />)}
            >
              <img src="src/assets/CardLevel1_3.png" alt="Image description" />
            </Card4>
            {/* Agrega más tarjetas aquí con diferentes posiciones */}
          </CardContainer>
          <NavigationBar>
            <button onClick={() => handleCardClick(<About />)}>1</button>
            <button onClick={() => handleCardClick(<About />)}>2</button>
            <button onClick={() => handleCardClick(<About />)}>3</button>
          </NavigationBar>
          {isModalOpen && (
            <Modal
              isOpen={isModalOpen}
              onRequestClose={() => setIsModalOpen(false)}
            >
              {modalContent}
              <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
            </Modal>
          )}
          
        </Suspense>
      </Container>
    </Section>
  );
};

export default StarkAdventure;