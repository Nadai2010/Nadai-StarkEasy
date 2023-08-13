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
         StarkEasy is a Learning Dapp, Academy and Portal to teach the world about Starknet and its Ecosystem in a fun and interactive way.
         <br/>
          <br/>
        StarkEasy will begin its activities with an English and Spanish bilingual approach. The Spanish section of Stark Easy will be known as “Hablando de Starknet”.
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
          If you’re new to Starknet, StarkEasy will be your best onboarding tool to enter this fast-growing Ecosystem. Whether you are a Developer, a User or an Investor you will be able to study and practice your skills while having a great time.

          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="How can I join the StarkEasy Community?"
          >
            Follow us on Twitter
            <br/>
           <br/>
            https://twitter.com/StarkEasy_ 
            <br/>
           <br/>
            More Social Channels are on the way!

          </Accordion> 
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
