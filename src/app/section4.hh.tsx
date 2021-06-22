import React from 'react';
import pasha3 from './assets/pasha3.svg';
import { usePashaSectionStyles } from './section.styles';

export const SectionHH = () => {
  const classes = usePashaSectionStyles({ imageRight: true });

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <p className={classes.p}>Что же пришло Паше в голову?</p>
      </div>
      <img
        className={classes.image}
        src={pasha3}
        alt="Обычный метод написания вакансий?"
      />
    </div>
  );
};
