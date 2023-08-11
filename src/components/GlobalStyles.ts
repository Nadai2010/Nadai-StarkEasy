import { createGlobalStyle } from "styled-components";
import "@fontsource/teko";

const GlobalStyles = createGlobalStyle`
  /* Estilos globales para el componente Navigation */
  section {
    width: 100vw;
    background-color: #ffffff; 
  }
  
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px; 
    width: 85%;
    height: 60px;
    margin: 0 auto;
  }
  
  ul {
    display: flex;
    justify-content: flex-end; /* Cambia space-between a flex-end */
    align-items: center;
    list-style: none;
  }
  
  li {
    margin: 0 1rem;
    color: #000000; /* Coloca el color del texto que desees */
    cursor: pointer;
  }
  
  li::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: #000000; /* Coloca el color de la línea que desees */
    transition: width 0.3s ease;
  }
  
  li:hover::after {
    width: 100%;
  }
  
 
  @media (max-width: 768px) {
    /* Agrega aquí los estilos específicos para dispositivos móviles */
    /* Por ejemplo:
    nav {
      height: 50px;
    }
    ul {
      flex-direction: column;
    }
    li {
      margin: 0.5rem 0;
    }
    */
  }

  /* Estilos globales para el resto de la aplicación */
  * {
    margin: 0;
    padding: 0;
  }

  *::before,
  *::after {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'teko', sans-serif;
    overflow-x: hidden;
    background-image: url('../src/assets/Portada12.jpg');
    background-size: cover; 
    background-repeat: no-repeat;
    background-attachment: fixed;
}

@media (max-width: 768px) {
    body {
        background-size: contain; /* Cambiar el tamaño del fondo */
        background-attachment: scroll; /* Cambiar la forma en que se adjunta el fondo */
    }
}
  
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .btn {
    /* Estilos para los botones */
    background-color: #a93af3;
    color: rgba(255, 255, 255, 0.87);
    border: 1px solid transparent;
    padding: 1rem 1.5em;
    font-size: 1em;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
    text-transform: uppercase;
    filter: drop-shadow(3px 4px 0 #0d0d2a);
  }
  
  .btn:hover {
    border-color: #6b099c;
  }
  
  input {
    /* Estilos para los inputs */
    font-size: 0.85rem;
    font-family: "IBM Plex Mono";
    padding: 1rem;
    max-width: 100%;
    box-sizing: border-box;
    text-align: center;
    color: rgba(0, 0, 0, 0.87);
  }
  
  @keyframes appearAnimation {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default GlobalStyles;
