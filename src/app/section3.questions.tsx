import React from 'react';
import pasha2 from './assets/pasha2.svg';
import { usePashaSectionStyles } from './section.styles';

export const SectionQuestions = () => {
  const classes = usePashaSectionStyles({ imageRight: false });

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={pasha2}
        alt="Какую должность написать?"
      />
      <div className={classes.textContainer}>
        <p className={classes.p}>
          Паша не первый, у кого возникают эти вопросы.
          <br />
          Поиск сотрудников - самая большая проблема предпринимателя после
          стартового капитала.
        </p>
      </div>
    </div>
  );
};
