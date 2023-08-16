import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { useAccount } from '@starknet-react/core';
import GlobalStyles from './components/GlobalStyles';
import { useState } from 'react';
import Connect from './components/Connect';
import Info from './components/Info';
import Logo from './components/Logo';
import SignForm from './components/SignForm';
import TokenFormComponent from './components/TokenForm';
import Home from './components/Home';
import HDSComponent from './components/HDS';
import StarknetESComponent from './components/StarknetEs';
import NHSComponent from './components/NftForm';
import WorkshopComponent from './components/Workshop';
import MenuStarkAdventureComponent from './components/MenuStarkAdventure';
import ComandosComponent from './components/Comandos';
import StandarComponent from './components/Standar';
import MulticallComponent from './components/Multicall';
import UniversalComponent from './components/Universal';
import Multicall2Component from './components/Multicall2';
import StarkEasyENSComponent from './components/StarkEasyENS';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-family: 'teko', sans-serif;
  font-size: 30px;
  margin-bottom: px; 
  position: relative;
  margin-right: 20px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #000000; 
    bottom: -5px;
    left: 0;
    transform: scaleX(0); 
    transition: transform 0.3s;
  }

  &:hover:before {
    transform: scaleX(1);
  }

  &:hover {
    color: #ff0000; 
  }
`;


const DropdownContent = styled.div<{ open: boolean }>`
  display: ${(props) => (props.open ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 8px 6px;
  background-color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

function App() {
  const { isConnected } = useAccount();
  const [StarkDevStationOpen, setStarkDevStationOpen] = useState(false);
  const [StarkJitsuonOpen, setStarkJitsuonOpen] = useState(false);

  const toggleStarkDevStation = () => {
    setStarkDevStationOpen(!StarkDevStationOpen);
  };

  const toggleStarkJitsu = () => {
    setStarkJitsuonOpen(!StarkJitsuonOpen);
  };

  const closeDropdowns = () => {
    setStarkDevStationOpen(false);
    setStarkJitsuonOpen(false);
  };

  return (
    <Router>
      <GlobalStyles />

      <div className="h-full p-4 flex flex-col">
        {isConnected && (
          <nav className="mb-4">
                       
             <Info />
             
              {/* Menú Stark Jitsu */}
              <DropdownContainer>
                <DropdownButton onClick={toggleStarkJitsu}>Stark Jitsu</DropdownButton>
                <DropdownContent open={StarkJitsuonOpen}>
                  <DropdownItem>
                    <Link to="/hds" onClick={closeDropdowns}>Hds</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/starknet-es" onClick={closeDropdowns}>🚧 StarknetEs</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Workshop" onClick={closeDropdowns}>🚧 Workshop</Link>
                  </DropdownItem>
                </DropdownContent>
              </DropdownContainer>
              
          
            {/* Menú Stark Adventure */}
            <Link
              to="/MenuStarkAdventure"
              className="link"
              style={{
                  fontFamily: 'teko, sans-serif',
                  fontSize: '30px',
                  margin: '0.5rem 0',
                  marginRight: '20px',
                  textDecoration: 'none',
                  color: '#000000', // Color de texto normal
                  transition: 'color 0.3s', // Transición suave para el cambio de color
                }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF0000')} // Cambiar el color al pasar el cursor
              onMouseLeave={(e) => (e.currentTarget.style.color = '#000000')} // Restaurar el color al quitar el cursor
            >
            Stark Adobencha
          </Link>
        
              
              {/* Menú Stark Dev-Station */}
              <DropdownContainer>
                <DropdownButton onClick={toggleStarkDevStation}>Stark Dev-Station</DropdownButton>
                <DropdownContent open={StarkDevStationOpen}>
                  <DropdownItem>
                    <Link to="/TokenForm" onClick={closeDropdowns}>🚧 Token Form</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/NHS" onClick={closeDropdowns}>NHT</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Comandos" onClick={closeDropdowns}>Terminal</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Standar" onClick={closeDropdowns}>Standard</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Universal" onClick={closeDropdowns}>Universal</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Multicall" onClick={closeDropdowns}>Multicall</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/Multicall2" onClick={closeDropdowns}>Multicall x100</Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/StarkEasyENS" onClick={closeDropdowns}>Stark Easy - ENS</Link>
                  </DropdownItem>
                </DropdownContent>
              </DropdownContainer>
             
          <SignForm />
        <Logo />
           
          </nav>
        )}

        <div className="flex-1 flex items-center text-center justify-center h-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/connect" element={<Connect />} />
            {isConnected && (
              <>
                <Route path="/TokenForm" element={<TokenFormPage />} />
                <Route path="/NHS" element={<NHSPage />} />
                <Route path="/hds" element={<HDSPage />} />
                <Route path="/starknet-es" element={<StarknetESPage />} />
                <Route path="/Workshop" element={<WorkshopPage />} />
                <Route path="/MenuStarkAdventure" element={<MenuStarkAdventurePage />} />
                <Route path="/Comandos" element={<ComandosPage />} />
                <Route path="/Standar" element={<StandarPage />} />
                <Route path="/Multicall" element={<MulticallPage />} />
                <Route path="/Multicall2" element={<Multicall2Page />} />
                <Route path="/StarkEasyENS" element={<StarkEasyENSPage />} />
                <Route path="/Universal" element={<UniversalPage />} />
                <Route path="/" element={<Navigate to="/TokenForm" />} />
              </>
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

function HDSPage() {
  return <HDSComponent />;
}

function StarknetESPage() {
  return <StarknetESComponent />;
}

function NHSPage() {
  return <NHSComponent />;
}

function WorkshopPage() {
  return <WorkshopComponent />;
}

function TokenFormPage() {
  return <TokenFormComponent />;
}

function MenuStarkAdventurePage() {
  return <MenuStarkAdventureComponent />;
}

function ComandosPage() {
  return <ComandosComponent />;
}

function StandarPage() {
  return <StandarComponent />;
}

function UniversalPage() {
  return <UniversalComponent />;
}

function MulticallPage() {
  return <MulticallComponent />;
}

function Multicall2Page() {
  return <Multicall2Component />;
}

function StarkEasyENSPage() {
  return <StarkEasyENSComponent />;
}

export default App;
