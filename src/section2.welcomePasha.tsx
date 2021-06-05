import { createUseStyles } from 'react-jss';
import { mediaQueries } from './lib/styleUtils';
import pasha1 from './assets/pasha1.svg';

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [mediaQueries.upXs]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  p: {
    fontSize: 16,
    [mediaQueries.upXs]: {
      fontSize: 24,
      marginRight: 65,
      textAlign: 'right',
    },
    [mediaQueries.upLg]: {
      fontSize: 48,
    },
  },
  image: {
    width: '100%',
    [mediaQueries.upXs]: {
      height: 415
    },
    [mediaQueries.upLg]: {
      height: 830
    },
  }
});

// img     height: 415px;
// p font-size: 24px;

export const SectionWelcomePasha = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <p className={classes.p}>
          Знакомтесь, это Паша.<br />
        Паша - предприниматель.
        </p>
        <p className={classes.p}>
          Паше нужен новый сотрудник в команду, но он весь в сомнениях...
        </p>
      </div>
      <img className={classes.image} src={pasha1} alt="С чего начать?" />
    </div>
  );
};
