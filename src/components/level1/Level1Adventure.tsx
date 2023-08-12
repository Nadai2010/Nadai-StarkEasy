import styled from "styled-components";

import backgroundImg from "/src/assets/MapLevel1.png"; // Asegúrate de proporcionar la ruta correcta a la imagen de fondo

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
`;

const Level1Adventure = () => {
  return (
    <Section>
      <BackgroundImage />
      <Container>
        <Card>
          <Title>Eliumi and Uriechi, the old wise twins known as “The founding Fathers of Starknetia”</Title>
          <SubText2>Legendary fighters and masters, have an important message for you: </SubText2>
          <SubText>
           </SubText>
          <SubTextLight>
          Dear StarkJitsu Students, you are the future of Starknetia!
          <br/>
          <br/>
          
Today is your first day at the StarkJitsu school and we want to wish you a good learning experience.         
During this adventure, accept every challenge as an opportunity to discover your inner strength and unleash your true potential as a Stark-Senshi.
<br/>
           <br/>
         Many lessons are ahead of you, be continuous and follow the 
         Founding principle of Starknetia, Integrity!
         <br/>
           <br/>
        Believe in yourself, you are the future of Starknetia!

          </SubTextLight>
        </Card>
      </Container>
    </Section>
  );
};

export default Level1Adventure;
