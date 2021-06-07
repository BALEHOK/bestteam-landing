import { createUseStyles } from 'react-jss';
import { mediaQueries } from '../lib/styleUtils';
import { Button } from './button';

const useStyles = createUseStyles({
  root: {
    marginTop: 45,
    [mediaQueries.upXs]: {
      marginTop: 60,
    },
    [mediaQueries.upLg]: {
      marginTop: 80
    },
  }
});

export const ButtonTasks = () => {
  const classes = useStyles();

  return (
    <Button className={classes.root} onClick={() => console.log('a')}>
      Написать задачи
    </Button>
  );
};
