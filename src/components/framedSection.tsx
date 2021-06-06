import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { colors, mediaQueries } from '../lib/styleUtils';

interface Props {
  children: ReactNode;
}

const useStyles = createUseStyles({
  root: {
    border: `1px solid ${colors.orange2}`,
    display: 'flex',
    flexDirection: 'column',
    marginTop: 45,
    padding: '20px 25px',
    [mediaQueries.upXs]: {
      marginTop: 60,
      padding: '40px 51px',
    },
    [mediaQueries.upLg]: {
      marginTop: 124,
      padding: '80px 102px',
    },
  },
});

export const FramedSection = ({ children }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};
