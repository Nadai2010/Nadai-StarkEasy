import GlobalStyles from './GlobalStyles';
import { starkeasy } from './Themes';
import { ThemeProvider } from 'styled-components';

import Navigation from "./Navigation";
import About from "./sections/About";
import Inicio from "./sections/Inicio";
import HowToLearn from "./sections/HowToLearn";
import Footer from "./Footer";
import TestYourSkills from "./sections/Testyourskills";
import Faq from "./sections/Faq";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
        <Navigation />
        <Inicio />
        <About />
        <HowToLearn />
        <TestYourSkills />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default Home;
