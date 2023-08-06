import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Minus } from '../Icons/Minus';
import { Plus } from '../Icons/Plus';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  ScrollTrigger: any; // Reemplaza 'any' por el tipo adecuado si tienes la definición de ScrollTrigger
}

const Container = styled.div`
  cursor: pointer;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${(props) => props.theme.carouselColor};
  margin: 3rem 0;

  @media (max-width: 48em) {
    margin: 2rem 0;
  }
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.fontsm};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Reveal = styled.div<{ clicked: boolean }>`
  display: ${(props) => (props.clicked ? "inline-block" : "none")};
  margin-top: 1rem;
  color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
`;

const Indicator = styled.span`
  font-size: ${(props) => props.theme.fontxxl};

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 1rem;
    height: auto;
    fill: ${(props) => props.theme.hoverColor};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Accordion: React.FC<AccordionProps> = ({ title, children, ScrollTrigger }) => {
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    ScrollTrigger.refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse]);

  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse)}>
        <Name>
          <span>{title}</span>
        </Name>
        {collapse ? (
          <Indicator>
            <Minus />
          </Indicator>
        ) : (
          <Indicator>
            <Plus />
          </Indicator>
        )}
      </Title>
      <Reveal clicked={collapse}>{children}</Reveal>
    </Container>
  );
};

export default Accordion;
