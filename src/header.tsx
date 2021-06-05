import logo from './assets/logo.png';
import { createUseStyles } from 'react-jss';
import { colors, fonts, mediaQueries } from './lib/styleUtils';

const useStyles = createUseStyles({
  root: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [mediaQueries.upXs]: {
      height: 85,
      padding: 15
    },
    [mediaQueries.upLg]: {
      padding: '15px 55px'
    },
  },
  logo: {
    height: '100%'
  },
  slogan: {
    fontFamily: fonts.bt,
    color: colors.blue,
    fontSize: 20,
    [mediaQueries.upXs]: {
      fontSize: 40
    },
    [mediaQueries.upLg]: {
      fontSize: 48
    },
  }
});

export const Header = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <img alt="best team logo" src={logo} className={classes.logo} />
      <span className={classes.slogan}>Нанимай лучших!</span>
    </header>
  );
};
