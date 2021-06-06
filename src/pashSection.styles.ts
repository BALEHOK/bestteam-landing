import { createUseStyles } from 'react-jss';
import { mediaQueries } from './lib/styleUtils';

interface Props {
  right: boolean;
}

export const useStyles = createUseStyles<string, Props>({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: ({ right }: Props) => right ? 'column-reverse' : 'column',
    marginTop: 60,
    [mediaQueries.upXs]: {
      flexDirection: 'row !important',
      justifyContent: 'space-between',
    },
    [mediaQueries.upLg]: {
      marginTop: 124,
    },
  },
  textContainer: {
    [mediaQueries.upXs]: {
      marginLeft: 65,
      textAlign: ({ right }: Props) => right ? 'right' : 'left'
    },
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
    width: '100%',
    [mediaQueries.upXs]: {
      height: 415
    },
    [mediaQueries.upLg]: {
      height: 830
    },
  }
});
