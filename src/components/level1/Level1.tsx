import GlobalStyles from '../GlobalStyles';
import { starkeasy } from '../Themes';
import { ThemeProvider } from 'styled-components';

import Level1History from "../level1/Level1History";


import HowToLearn from "../sections/HowToLearn";
import Footer from "../Footer";
import TestYourSkills from "../sections/Testyourskills";
import Faq from "../sections/Faq";
import ScrollToTop from "../ScrollToTop";

function Level1() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
      <Level1History />
       
        <HowToLearn />
        <TestYourSkills />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default Level1;
