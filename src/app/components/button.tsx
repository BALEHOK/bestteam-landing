import classNames from 'classnames';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { colors, fonts, mediaQueries } from '../lib/styleUtils';

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

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
      padding: '10px 20px',
    },
    [mediaQueries.upLg]: {
      borderRadius: 10,
      fontSize: 60,
      padding: '12px 26px',
    },

    '&:hover': {
      backgroundColor: colors.orange2,
    },
    '&:active': {
      filter: 'brightness(85%)',
    },
  },
});

export const Button = ({ children, className, ...rest }: Props) => {
  const classes = useStyles();

  return (
    <button className={classNames(classes.root, className)} {...rest}>
      {children}
    </button>
  );
};
