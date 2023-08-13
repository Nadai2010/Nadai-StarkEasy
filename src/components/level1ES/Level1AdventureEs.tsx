import styled from "styled-components";

import backgroundImg from "/src/assets/MapLevelEs.png"; 
import Eli from '/src/assets/Eli.png';
import Uri from '/src/assets/Uri.png';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImg}); /* Utiliza la importación para la URL de la imagen */
  background-size: cover;
  background-position: center;
  filter: blur(px); /* Opcional: Aplicar un efecto de desenfoque a la imagen de fondo */
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  z-index: 1;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: black;
  margin-bottom: 10px;
  text-align: center;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  margin-bottom: 20px;
`;

const SubText2 = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.customColor};
  font-weight: 600px;
  margin-bottom: 20px;
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  flex-direction: column;
  text-align: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  transform: ; /* Reducción del 50% */
  width: 100%;
  justify-content: center;
  align-items: center; 
  margin-bottom: 20px;
  margin-left: ;

  
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Image = styled.img`
  width: 300px; /* Ajusta el tamaño de la imagen según tu diseño */
  height: 400px;
`;

const Level1AdventureEs = () => {
  return (
    <Section>
      <BackgroundImage />
      <Container>
        <Card>
          <Title>Eliumi y Uriechi, los viejos sabios gemelos conocidos como “los padres fundadores de Starknetia”</Title>
          <SubText2>Maestros y luchadores legendarios, tenemos un mensaje importante para ustedes: </SubText2>
          <SubText>
           </SubText>
           <ColumnContainer>
          <SubTextLight>
          <ImageContainer>
          <Image src={Eli} alt="Left Image" />
          Hoy es su primer día en la escuela StarkJitsu y queremos desearles una buena experiencia de aprendizaje. Durante esta aventura, aceptan cada desafío como una oportunidad para descubrir su fuerza interior y liberar su verdadero potencial como Stark-Senshi.
          <br/>
          <br/>
          Hay muchas lecciones por delante, séan continuos y sigan el principio fundamental de Starknetia, ¡Integridad!
          <br/>
          <br/>
          ¡Crean en si mismo, ustedes son el futuro de Starknetia!

          <Image src={Uri} alt="Right Image" />
          </ImageContainer>
          </SubTextLight>
          </ColumnContainer>

        
            
          

        </Card>
      </Container>
    </Section>
  );
};

export default Level1AdventureEs;
