import React from 'react';
import { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { AppContext } from '../appContext';
import { mediaQueries } from '../lib/styleUtils';
import { Button } from './button';

const useStyles = createUseStyles({
  root: {
    marginTop: 45,
    [mediaQueries.upXs]: {
      marginTop: 60,
    },
    [mediaQueries.upLg]: {
      marginTop: 80,
    },
  },
});

export const ButtonTasks = () => {
  const classes = useStyles();
  const { setPopupVisible } = useContext(AppContext);

  return (
    <Button className={classes.root} onClick={() => setPopupVisible(true)}>
      Написать задачи
    </Button>
  );
};
