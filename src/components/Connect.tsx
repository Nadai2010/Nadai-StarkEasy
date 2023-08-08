import { useNavigate } from 'react-router-dom';
import { useConnectors } from '@starknet-react/core';
import styled from 'styled-components';

import backgroundImage1 from '/src/assets/Braavos2.png'; // Ruta de la primera imagen de prueba
import backgroundImage2 from '/src/assets/Argent.png'; // Ruta de la segunda imagen de prueba

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
`;

const FormTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 0rem;
  color: grey;
`;

const FormTitle2 = styled.h2`
  font-size: 3em;
  margin-bottom: 3rem;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const StyledConnectButton = styled.button`
  /* Estilos para el botón */
  display: inline-block;
  width: 220px;
  height: 100px;
  background-color: #000000;
  color: #ffffff;
  outline: none;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  margin: 1rem 0;

  /* Agregar imagen de fondo */
  background-image: url(${backgroundImage1});
  background-size: cover;
  background-position: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const StyledConnectButton2 = styled(StyledConnectButton)`
  /* Estilos para el segundo botón */
  background-image: url(${backgroundImage2});
`;

const ConnectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default function Connect() {
  const { connect, connectors } = useConnectors();
  const navigate = useNavigate();

  const handleConnect = async (connector: any) => {
    // Lógica de conexión con el conector
    await connect(connector);
    navigate('/TokenForm');
  };

  return (
    <ConnectContainer>
      <StyledForm>
        <FormTitle>Connect to:</FormTitle>
        <FormTitle2>Stark Easy</FormTitle2>
        <ButtonContainer>
          <StyledConnectButton
            onClick={() => handleConnect(connectors[0])}
            disabled={!connectors[0].available()}
          />
          <StyledConnectButton2
            onClick={() => handleConnect(connectors[1])}
            disabled={!connectors[1].available()}
          />
        </ButtonContainer>
      </StyledForm>
    </ConnectContainer>
  );
}
