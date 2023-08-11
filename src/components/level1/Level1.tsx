import GlobalStyles from '../GlobalStyles';
import { starkeasy } from '../Themes';
import { ThemeProvider } from 'styled-components';

import Level1History from "../level1/Level1History";
import Level1Adventure from "../level1/Level1Adventure";
import Level1Learn from "../level1/Level1Learn";
import Level1Exercise from "../level1/Level1Exercise";

import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

function Level1() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
        <Level1History />
        <Level1Adventure />
        <Level1Learn/>
        <Level1Exercise />
    
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default Level1;
