import styled from "styled-components";

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
  background-image: url('/src/assets/MapLevel1.png'); /* Cambiar 'background.jpg' por la URL de la imagen */
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
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  margin-bottom: 10px;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => props.theme.body};
  margin-bottom: 20px;
`;

const SubText2 = styled.p`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.customColor};
  font-weight: 600;
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
          <Title>Introducing Stark Easy</Title>
          <SubText2>Your Learning dApp to learn about Starknet!</SubText2>
          <SubText>
            Are you eager to learn about Starknet, its cutting-edge technology and its
            fast-growing ecosystem but you find the complexities a bit overwhelming?
            Look no further! We are thrilled to present "Stark Easy" - a revolutionary
            learning dApp and Portal designed to make your journey into Starknet both
            enjoyable and straightforward.
          </SubText>
          <SubTextLight>
            Furthermore, there will also be a dedicated learning path for Spanish speakers,
            Hablando De Starknet, which will also incorporate the existing HDS Spanish-speaking
            program, presented by Nadai & Nurstar.
          </SubTextLight>
        </Card>
      </Container>
    </Section>
  );
};

export default Level1Adventure;
