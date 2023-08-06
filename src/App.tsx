import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import { useAccount } from '@starknet-react/core';
import GlobalStyles from './components/GlobalStyles'; // Importa el archivo GlobalStyles.js
import Connect from './components/Connect';
import Info from './components/Info';
import Logo from "./components/Logo";
import SignForm from './components/SignForm';
import TokenFormComponent from './components/TokenForm';
import Home from './components/Home';
import HDSComponent from './components/HDS';
import StarknetESComponent from './components/StarknetEs';
import NHSComponent from './components/NftForm';
import WorkshopComponent from './components/Workshop';
import JuegaComponent from './components/Juega';
import ComandosComponent from './components/Comandos';
import StandarComponent from './components/Standar';
import MulticallComponent from './components/Multicall';
import UniversalComponent from './components/Universal';

function App() {
  const { isConnected } = useAccount();

  return (
    <Router>
      <GlobalStyles />

      <div className="h-full p-4 flex flex-col">
        
        {isConnected && (
          <nav className="mb-4">
            <ul className="flex justify-center items-center"> {/* Utilizamos flex para centrar los elementos */}
              <li className="mr-4">
                <Info />
              </li>
              <li className="mr-4">
                <Link to="/TokenForm" className="link">
                  Token
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/hds" className="link">
                  HDS
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/NHS" className="link">
                  NHT
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/starknet-es" className="link">
                  Starknet-ES
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/Workshop" className="link">
                  Workshop
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/Juega" className="link">
                  Juega
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/Comandos" className="link">
                  Terminal
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/Standar" className="link">
                  Standar
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/Universal" className="link">
                  Universal
                </Link>
              </li>
              <li className="mr-4">
                <Link to="/Multicall" className="link">
                  Multicall
                </Link>
              </li>
              <li className="ml-auto mr-4">
                <SignForm />
              </li>
              <Logo />
            </ul>
          </nav>
        )}

                {/* Resto del código de la aplicación */}
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
                      <Route path="/Juega" element={<JuegaPage />} />
                      <Route path="/Comandos" element={<ComandosPage />} />
                      <Route path="/Standar" element={<StandarPage />} />
                      <Route path="/Multicall" element={<MulticallPage />} />
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
  return (
    <>
     {window.location.pathname === '/hds' && <HDSComponent />}
    </>
  );
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

function JuegaPage() {
  return <JuegaComponent />;
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

export default App;
