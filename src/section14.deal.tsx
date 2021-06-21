import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { useSectionStyles } from './section.styles';
import pasha8deal from './assets/pasha8.deal.svg';
import { mediaQueries } from './lib/styleUtils';
import { ButtonTasks } from './components/buttonTasks';

const useStyles = createUseStyles({
  image: {
    width: 200,
    [mediaQueries.upXs]: {
      width: 270,
    },
    [mediaQueries.upLg]: {
      width: 450,
    },
  },
});

export const Section14Deal = () => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <div
      className={classNames(
        classesSection.marginTop,
        classesSection.columnCenter
      )}
    >
      <img className={classes.image} src={pasha8deal} alt="Написать задачи" />
      <ButtonTasks />
    </div>
  );
};
