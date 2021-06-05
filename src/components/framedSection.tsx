import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { colors, mediaQueries } from '../lib/styleUtils';

interface Props {
  children: ReactNode;
}

const useStyles = createUseStyles({
  root: {
    border: `1px solid ${colors.lightOrange}`,
    margin: '45px 0',
    padding: '20px 25px',
    [mediaQueries.upXs]: {
      margin: '60px 0',
      padding: '40px 51px',
    },
    [mediaQueries.upLg]: {
      margin: '124px 0',
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
