import GlobalStyles from './GlobalStyles';
import { starkeasy } from './Themes';
import { ThemeProvider } from 'styled-components';

import StarkAdventureMap from "./sections/StarkAdventureMap";


function Juega() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
         <StarkAdventureMap />
       
      </ThemeProvider>
    </main>
  );
}

export default Juega;