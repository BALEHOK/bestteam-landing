import classNames from 'classnames';
import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { TFunction } from '../lib/functionTypes';
import { colors, fonts, mediaQueries } from '../lib/styleUtils';

interface Props {
  children: ReactNode;
  className?: string;
  onClick: TFunction;
}

const useStyles = createUseStyles({
  root: {
    alignSelf: 'center',
    background: colors.orange,
    border: 'none',
    borderRadius: 3,
    color: colors.beige,
    fontFamily: fonts.bt,
    fontSize: 32,
    padding: '8px 18px',
    textTransform: 'uppercase',
    [mediaQueries.upXs]: {
      borderRadius: 5,
      fontSize: 48,
      padding: '10px 20px'
    },
    [mediaQueries.upLg]: {
      borderRadius: 10,
      fontSize: 60,
      padding: '12px 26px'
    },

    '&:hover': {
      backgroundColor: colors.orange2
    }
  },
});

export const Button = ({ children, className, onClick }: Props) => {
  const classes = useStyles();

  return (
    <button className={classNames(classes.root, className)} onClick={onClick}>
      {children}
    </button>
  );
};
