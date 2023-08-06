import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoPNG from '../assets/Logo.png';

const LogoText = styled.h1`
  font-family: "Akaya Telivigala", cursive;
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
`;

const StyledLink = styled(Link)`
  display: flex;
`;

const Logo = () => {
  return (
    <LogoText>
      <StyledLink
        to=""
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={LogoPNG}
          style={{ width: "60px", height: "60px", borderRadius: "50px" }}
          alt="Logo"
        />
      </StyledLink>
    </LogoText>
  );
};

export default Logo;
