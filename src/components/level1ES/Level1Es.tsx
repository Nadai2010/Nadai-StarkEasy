import GlobalStyles from '../GlobalStyles';
import { starkeasy } from '../Themes';
import { ThemeProvider } from 'styled-components';

import Level1HistoryEs from "../level1ES/Level1HistoryEs";
import Level1AdventureEs from "../level1ES/Level1AdventureEs";
import Level1LearnEs from "../level1ES/Level1LearnEs";
import Level1ExerciseEs from "../level1ES/Level1ExerciseEs";

import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

function Level1Es() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={starkeasy}>
        <Level1HistoryEs />
        <Level1AdventureEs />
        <Level1LearnEs/>
        <Level1ExerciseEs />
    
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </main>
  );
}

export default Level1Es;
