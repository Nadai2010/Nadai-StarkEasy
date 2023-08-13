import { lazy, Suspense } from "react";
import styled from "styled-components";
import Logo from "./Logo";

import Twitter from "../Icons/Twitter";
import Telegram from "../Icons/Telegram";
import Loading from "./Loading";

const Banner = lazy(() => import("./Banner"));

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: #ffb7d7;
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  gap: 8px;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`;
const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  font-size: ${(props) => props.theme.fontmd};

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontmd};
  

  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span {
      margin-bottom: 1rem;
    }
  }
`;

const Footer = () => {
  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  
  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Banner />{" "}
      </Suspense>

      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <Twitter />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              aria-label="telegram"
            >
              <Telegram />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("starkeasy")}>Stark Easy</Item>
          <Item onClick={() => scrollTo("starkjitsu")}>Stark Jitsu</Item>
          <Item onClick={() => scrollTo("starkdevstation")}>Stark Dev-Station</Item>
          <Item onClick={() => scrollTo("faq")}>Faq</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} 
        </span>
      </Bottom>
    </Section>
  );
};

export default Footer;
