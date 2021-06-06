import pasha2 from './assets/pasha2.svg';
import { useStyles } from './pashSection.styles';

export const SectionQuestions = () => {
  const classes = useStyles({ right: true });

  return (
    <div className={classes.root}>
      <img className={classes.image} src={pasha2} alt="С чего начать?" />
      <div className={classes.textContainer}>
        <p className={classes.p}>
          Паша не первый, у кого возникают эти вопросы.<br />
          Поиск сотрудников - самая большая проблема
          предпринимателя после стартового капитала.
        </p>
      </div>
    </div>
  );
};
