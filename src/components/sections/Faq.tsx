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
          <Accordion ScrollTrigger={ScrollTrigger} title="What is Tsubasa?">
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At
            Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What makes Tsubasa different from other card games?"
          >
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At
            Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What are the advantages of a blockchain-based game?"
          >
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At
            Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
          </Accordion>
        </Box>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="Can I sell or trade my Tsubasa cards?"
          >
            Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At
            Repellat Placeat, Adipisicing Elit. At Repellat Placeat.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="How can I join the Tsubasa community?
"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="What if I need help or support while playing Tsubasa?
"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim
            veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem,
            maxime, similique neque minus aliquam dolore doloremque laboriosam,
            facilis quibusdam unde sint officia.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
