import GlobalStyles from './GlobalStyles';
import { starkeasy } from './Themes';
import { ThemeProvider } from 'styled-components';

import Navigation from "./Navigation";
import StarkEasy from "./sections/StarkEasy";
import Inicio from "./sections/Inicio";
import StarkJitsu from "./sections/StarkJitsu";
import Footer from "./Footer";
import StarkDevStation from "./sections/StarkDevStation";
import Faq from "./sections/Faq";
import ScrollToTop from "./ScrollToTop";

function Home() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
        <Navigation />
        <Inicio />
        <StarkEasy />
        <StarkJitsu />
        <StarkDevStation />
        <Faq />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default Home;
