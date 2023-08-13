import { useState, lazy, Suspense } from "react";
import styled from "styled-components";
import Loading from "../Loading";
import About from "./StarkEasy";
import Level1Es from "../level1ES/Level1Es";
import ReactModal from "react-modal";
import CardLevel from "/src/assets/CardLevel1Es.png";
import CardLevel1 from "/src/assets/CardLevel1_1Es.png";
import CardLevel2 from "/src/assets/CardLevel1_2Es.png";
import CardLevel3 from "/src/assets/CardLevel1_3Es.png";

const CarouselAdventureMapEs = lazy(() => import("../CarouselAdventureMapEs"));


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
  width: 150px;
  height: ${(props: { height: number }) => props.height}px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 25%;
  left: 5%;
  

  &:hover {
    transform: translateX(25%) translateY(40%) scale(2);
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
    transform: translateX(+20%) translateY(+60%) scale(2.2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Card3 = styled.div`
  width: 200px;
  height: ${(props: { height: number }) => props.height}px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  position: fixed;
  top: 40%;
  left: 30%;
  

  &:hover {
    transform: translateY(-0%) scale(1.5);
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
  top: 45%;
  right: 26%;
  

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

interface StarkAdventureMapEsProps {
  language: string;
};

const Modal = styled(ReactModal)`
/* Estilos para tu modal aquí */
overflow-x: hidden;
overflow-y: auto; /* Agrega overflow-y para permitir el desplazamiento vertical */
max-height: 110vh; /* Limita la altura máxima del modal para que no cubra toda la pantalla */
`;

const StarkAdventureMapEs: React.FC<StarkAdventureMapEsProps> = ({  }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(null); // Asegura el tipo correcto

  const handleCardClick = (content: React.ReactNode) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  return (
    <Section id="home">
      <Container>
        <Suspense fallback={<Loading />}>
          <CarouselAdventureMapEs />
          <CardContainer>

            <Card
              height={250}
              onClick={() => handleCardClick(<Level1Es />)}
            >
              <img src={CardLevel}/>
            </Card>
            <Card2
              height={160}
              onClick={() => handleCardClick(<About />)}
            >
              <img src={CardLevel1} alt="Image description" />
            </Card2>
            <Card3
              height={300}
              onClick={() => handleCardClick(<About />)}
            >
              <img src={CardLevel2} alt="Image description" />
            </Card3>
            <Card4
              height={190}
              onClick={() => handleCardClick(<About />)}
            >
              <img src={CardLevel3} alt="Image description" />
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

export default StarkAdventureMapEs;