import { lazy, Suspense } from "react";
import styled from "styled-components";
import Loading from "../Loading";

const CoverPhoto = lazy(() => import("../CoverPhoto"));
const TypeWriterText = lazy(() => import("../TypeWriterText"));

const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
  font-family: 'Pacifico', cursive;
  font-size: 0.9rem;
`;
const Container = styled.div`
  width: 80%;
  min-height: 85vh;
  margin: 0 auto;
  /* background-color: lightblue; */

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -10rem;
`;


const Inicio = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <CoverPhoto />
          </Suspense>
        </Box>
      </Container>
    </Section>
  );
};

export default Inicio;
