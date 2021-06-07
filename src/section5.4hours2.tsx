import pasha4 from './assets/pasha4.2.svg';
import { usePashaSectionStyles } from './section.styles';

export const Section4Hours2 = () => {
  const classes = usePashaSectionStyles({ imageRight: false });

  return (
    <>
      <div className={classes.root}>
        <p className={classes.p}>
          Прошло 4 часа...
        </p>
      </div>
      <div className={classes.root}>
        <img
          className={classes.image}
          src={pasha4}
          alt="Проблемы с традиционными методами найма" />
        <div className={classes.textContainer}>
          <p className={classes.p}>
            Так себе варианты.
          </p>
        </div>
      </div>
    </>
  );
};
