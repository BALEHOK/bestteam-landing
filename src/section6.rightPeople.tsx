import pasha5 from './assets/pasha5.svg';
import { usePashaSectionStyles } from './pashSection.styles';

export const SectionRightPeople = () => {
  const classes = usePashaSectionStyles({ imageRight: true });

  return (
    <div className={classes.root}>
      <div className={classes.textContainer}>
        <p className={classes.p}>
          Паша понимает всю важность проблемы.
        </p>
      </div>
      <img className={classes.image} src={pasha5}
        alt="Правильные люди на правильных позициях" />
    </div>
  );
};
