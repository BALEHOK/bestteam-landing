import { createUseStyles } from 'react-jss';
import { mediaQueries } from './lib/styleUtils';

interface Props {
  imageRight: boolean;
}

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
  p: {
    fontSize: 16,
    [mediaQueries.upXs]: {
      fontSize: 24,
    },
    [mediaQueries.upLg]: {
      fontSize: 48,
    },
  },
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
