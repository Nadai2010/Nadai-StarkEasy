import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontmd};
  position: relative;
  color: ${(props) => props.theme.text};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.text};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      // Limpia los eventos de ScrollTrigger cuando el componente se desmonta
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion ScrollTrigger={ScrollTrigger} title="What is StarkEasy?"
          >
          “Tell me and I forget, teach me and I may remember, involve me and I learn.” — Benjamin Franklin
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What makes StarkEasy unique?"
          >
          “Tell me and I forget, teach me and I may remember, involve me and I learn.” — Benjamin Franklin
          </Accordion>
          </Box>
          <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What can you learn on StarkEasy?"
          >
          “Tell me and I forget, teach me and I may remember, involve me and I learn.” — Benjamin Franklin
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="How can I join the StarkEasy Community?"
          >
          </Accordion> 
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
