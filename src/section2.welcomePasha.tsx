import { createUseStyles } from 'react-jss';
import { mediaQueries } from './lib/styleUtils';
import pasha1 from './assets/pasha1.svg';
import { useStyles } from './pashSection.styles';

export const SectionWelcomePasha = () => {
  const classes = useStyles({ right: false });

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <p className={classes.p}>
          Знакомтесь, это Паша.<br />
        Паша - предприниматель.
        </p>
        <p className={classes.p}>
          Паше нужен новый сотрудник в команду, но он весь в сомнениях...
        </p>
      </div>
      <img className={classes.image} src={pasha1} alt="С чего начать?" />
    </div>
  );
};
