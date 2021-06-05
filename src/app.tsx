import { Header } from './header';
import { createUseStyles } from 'react-jss';
import { fonts, mediaBreakpoints, mediaQueries } from './lib/styleUtils';
import { SectionUtp } from './section1.utp';

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
      </main>
    </div>
  );
};

export default App;
