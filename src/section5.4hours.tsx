import { createUseStyles } from 'react-jss';
import pasha4 from './assets/pasha4.svg';
import { mediaQueries } from './lib/styleUtils';
import { usePashaSectionStyles } from './pashSection.styles';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 60,
    [mediaQueries.upLg]: {
      marginTop: 124,
    },
  },
  image: {
    alignSelf: 'center',
    [mediaQueries.downXs]: {
      width: '100%',
    },
    [mediaQueries.upXs]: {
      height: 280,
    },
    [mediaQueries.upLg]: {
      height: 530,
    },
  },
});

export const Section4Hours = () => {
  const classes = useStyles();
  const pashaClasses = usePashaSectionStyles({ imageRight: false });

  return (
    <div className={classes.root}>
      <p className={pashaClasses.p}>
        Прошло 4 часа...
      </p>
      <img
        className={classes.image}
        src={pasha4}
        alt="Проблемы с традиционными методами найма" />
    </div>
  );
};
