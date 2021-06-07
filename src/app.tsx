import { Header } from './header';
import { createUseStyles } from 'react-jss';
import { fonts, mediaBreakpoints, mediaQueries } from './lib/styleUtils';
import { SectionUtp } from './section1.utp';
import React from 'react';
import { SectionWelcomePasha } from './section2.welcomePasha';
import { SectionQuestions } from './section3.questions';
import { SectionHH } from './section4.hh';
import { Section4Hours2 } from './section5.4hours2';
import { SectionRightPeople } from './section6.rightPeople';
import { SectionNeedBT } from './section7.needBt';

const useStyles = createUseStyles({
  root: {
    fontFamily: fonts.primary,
    maxWidth: mediaBreakpoints.lg,
    margin: '0 auto',
    padding: 10,
    [mediaQueries.upXs]: {
      padding: 30
    },
    [mediaQueries.upLg]: {
      padding: 65
    },
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main>
        <SectionUtp />
        <SectionWelcomePasha />
        <SectionQuestions />
        <SectionHH />
        <Section4Hours2 />
        <SectionRightPeople />
        <SectionNeedBT />
      </main>
    </div>
  );
};

export default App;
