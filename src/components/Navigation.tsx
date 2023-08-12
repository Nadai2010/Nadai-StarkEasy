import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section``;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background: white;
  width: 100%;
  padding: 0 2rem;

  @media (max-width: 70em) {
    width: 75%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    padding: 0;
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-right: 30px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 40em) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: absolute;
    top: 60px;
    left: 0;
    background-color: white;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    display: none;
  }
`;

const MenuItem = styled.li`
  margin: 0rem;
  margin-right: 6rem;
  margin-top: -50px;
  font-size: 38px;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #d81f3f;
  }

  @media (max-width: 40em) {
    margin: 0;
    padding: 1rem;
    font-size: 14px;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  border-left: 60px solid #FFFFFF; /* Añadir un borde de la izquierda */

  @media (max-width: 40em) {
    border-left: none; /* Remover el borde en versiones móviles */
  }
`;

const LogoImage = styled.img`
  width: 140px;
  height: 140px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Ajustar el valor de escala para el efecto de zoom */
  }

  @media (max-width: 40em) {
    width: 100px; /* Ajustar el tamaño del logo en versiones móviles */
    height: 100px;
  }
`;


const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleHomeClick = () => {
    navigate('/connect');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });

      setIsMenuOpen(false);
    }
  };

  return (
    <Section id="navigation">
      <NavBar>
        <LogoContainer onClick={handleLogoClick}>
          <LogoImage src="/src/assets/Logo.png" alt="Logo" />
        </LogoContainer>
        <Menu style={{ display: isMenuOpen ? 'flex' : 'none' }}>
          <MenuItem onClick={handleHomeClick}>CONNECT</MenuItem>
          <MenuItem onClick={() => scrollTo('starkeasy')}>Stark Easy</MenuItem>
          <MenuItem onClick={() => scrollTo('starkjitsu')}>Stark Jitsu</MenuItem>
          <MenuItem onClick={() => scrollTo('starkdevstation')}>Stark Dev-Station</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>FAQ</MenuItem>
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navigation;
