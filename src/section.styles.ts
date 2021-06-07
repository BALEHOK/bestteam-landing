import { createUseStyles } from 'react-jss';
import { JssStyle } from 'jss';
import { colors, mediaQueries } from './lib/styleUtils';
import flagBullet from './assets/flag-bullet.svg';

interface Props {
  imageRight: boolean;
}

const p: JssStyle = {
  fontSize: 16,
  [mediaQueries.upXs]: {
    fontSize: 24,
  },
  [mediaQueries.upLg]: {
    fontSize: 48,
  },
};

export const useSectionStyles = createUseStyles({
  marginTop: {
    marginTop: 60,
    [mediaQueries.upLg]: {
      marginTop: 124,
    },
  },
  columnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  h1: {
    color: colors.darkerBlue,
    fontSize: 22,
    [mediaQueries.upXs]: {
      fontSize: 32,
    },
    [mediaQueries.upLg]: {
      fontSize: 65,
    },
  },
  h2: {
    fontSize: 18,
    [mediaQueries.upXs]: {
      fontSize: 28,
    },
    [mediaQueries.upLg]: {
      fontSize: 56,
    },
  },
  p,
  point: {
    backgroundImage: `url(${flagBullet})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top 8px',
    backgroundSize: 22,
    minHeight: 36,
    paddingLeft: 30,
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    [mediaQueries.upXs]: {
      backgroundPosition: 'left top 7px',
      backgroundSize: 32,
      minHeight: 36,
      paddingLeft: 45,
      fontSize: 17,
    },
    [mediaQueries.upLg]: {
      backgroundPosition: 'left top 14px',
      backgroundSize: 64,
      minHeight: 72,
      paddingLeft: 90,
      fontSize: 32,
    },

    '& + &': {
      marginTop: 30
    }
  },
});

export const usePashaSectionStyles = createUseStyles<string, Props>({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: ({ imageRight }: Props) =>
      imageRight ? 'column' : 'column-reverse',
    marginTop: 60,
    [mediaQueries.upXs]: {
      alignItems: 'center',
      flexDirection: 'row !important',
      justifyContent: 'space-between',
    },
    [mediaQueries.upLg]: {
      marginTop: 124,
    },
  },
  textContainer: {
    [mediaQueries.upXs]: {
      marginLeft: ({ imageRight }: Props) =>
        imageRight ? 0 : 65,
      marginRight: ({ imageRight }: Props) =>
        imageRight ? 65 : 0,
      textAlign: ({ imageRight }: Props) =>
        imageRight ? 'left' : 'right',

    }
  },
  p,
  image: {
    [mediaQueries.downXs]: {
      width: '100%',
    },
    [mediaQueries.upXs]: {
      height: 415,
    },
    [mediaQueries.upLg]: {
      height: 830,
    },
  },
});
