import { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import { starkeasy } from './Themes';
import { ThemeProvider } from 'styled-components';
import StarkAdventureMap from './sections/StarkAdventureMap';
import styled from 'styled-components';
import StarkAdventureMapEs from './sections/StarkAdventureMapEs';
import flagSpain from '../assets/Spain.png'; // Import de la bandera de España
import flagEngland from '../assets/Ingles.png';

const MenuContainer = styled.div<{ selected: boolean }>`
  display: ${({ selected }) => (selected ? 'none' : 'flex')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10vh;
  transition: all 0.3s ease-in-out;
`;

const LanguageButtons = styled.div`
  display: flex;
  gap: 200px;
  margin-top: 40%;
`;

const LanguageButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const FlagImage = styled.img`
  width: 300px;
  height: auto;
`;

function MenuStarkAdventure() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
        <div>
          <MenuContainer selected={selectedLanguage !== null}>
            {selectedLanguage === null ? (
              <LanguageButtons>
                <LanguageButton onClick={() => handleLanguageSelect('es')}>
                  <FlagImage src={flagSpain} alt="Español" />
                </LanguageButton>
                <LanguageButton onClick={() => handleLanguageSelect('en')}>
                  <FlagImage src={flagEngland} alt="Inglés" />
                </LanguageButton>
              </LanguageButtons>
            ) : null}
          </MenuContainer>
          {selectedLanguage !== null && (
            <div>
              {selectedLanguage === 'es' ? (
                <StarkAdventureMapEs language={selectedLanguage} />
              ) : (
                <StarkAdventureMap language={selectedLanguage} />
              )}
            </div>
          )}
        </div>
      </ThemeProvider>
    </main>
  );
}

export default MenuStarkAdventure;