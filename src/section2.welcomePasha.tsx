import pasha1 from './assets/pasha1.svg';
import { usePashaSectionStyles } from './section.styles';

export const SectionWelcomePasha = () => {
  const classes = usePashaSectionStyles({ imageRight: true });

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
