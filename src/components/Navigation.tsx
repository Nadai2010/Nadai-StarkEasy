import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import "./GlobalStyles";

const Section = styled.section``;
const NavBar = styled.nav`
  display: flex;
  justify-content: center; /* Centrar el contenido horizontalmente */
  align-items: center;
  font-size: 20px; /* Tamaño de la fuente reducido */
  height: 60px;
  background: linear-gradient(to bottom, #fbb03b, #ffffff); /* Gradiente de rojo claro a blanco */
  width: 100%; /* Ocupar todo el ancho disponible */

  @media (max-width: 768px) {
    /* Ajustes para dispositivos móviles */
    font-size: 16px;
    height: 50px;
  }
`;



const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  /* Agrega otros estilos específicos del menú si es necesario */
`;
const MenuItem = styled.li`
  margin: 0 1rem;
  color: blue; /* Cambia el color del texto a azul */
  cursor: pointer;
  font-size: 22px; /* Tamaño de la fuente reducido */

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs}; /* Tamaño de fuente para dispositivos móviles */
    text-align: center;
  }
`;
const HamburgerMenu = styled.span``;

const Navigation = () => {
  const navigate = useNavigate();
  const [, setClick] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

const handleHomeClick = () => {
    // Redirige a la página de Conectar Wallet
    navigate('/connect');
  };

const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      setClick(false);
    }
  };

  const handleMenuClick = () => {
    setClick((prevClick) => !prevClick);
  };

  return (
    <Section id="navigation">
    <NavBar>
      <HamburgerMenu onClick={handleMenuClick}>
        &nbsp;
      </HamburgerMenu>
      <Menu ref={menuRef} onClick={handleMenuClick}>
          <MenuItem onClick={handleHomeClick}>CONNECT Stark Easy </MenuItem>
          <MenuItem onClick={() => scrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}> How to Play</MenuItem>
          <MenuItem onClick={() => scrollTo("news")}> Community</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}> FAQ</MenuItem>
        </Menu>
      </NavBar>
    </Section>
  );
};

export default Navigation;
