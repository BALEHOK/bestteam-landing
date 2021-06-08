import classNames from 'classnames';
import { ButtonTasks } from './components/buttonTasks';
import { createUseStyles } from 'react-jss';
import pasha6 from './assets/pasha6.svg';
import { mediaQueries } from './lib/styleUtils';
import { usePashaSectionStyles, useSectionStyles } from './section.styles';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    [mediaQueries.upXs]: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [mediaQueries.upLg]: {
    },
  },
  textContainer: {
    textAlign: 'center'
  },
  ctaContainer: {
    margin: '0 115px',
  },
  sub: {
    lineHeight: 1,
    fontSize: 13,
    [mediaQueries.upXs]: {
      fontSize: 16,
    },
    [mediaQueries.upLg]: {
      fontSize: 32,
    },
  }
});

export const Section8HowItWorks = () => {
  const classesPashaSection = usePashaSectionStyles({ imageRight: false });
  const classesSection = useSectionStyles();
  const classes = useStyles();

  return (
    <>
      <div className={classNames(classesSection.marginTop, classes.root)}>
        <img
          className={classesPashaSection.image}
          src={pasha6}
          alt="Опишите задачи для будущего сотрудника" />
        <div className={classes.textContainer}>
          <p className={classesPashaSection.p}>
            Опишите задачи для будущего сотрудника.
          </p>
          <sub className={classes.sub}>
            Не думайте над правильными формулировками.
            Если понимаете, какой нужен результат от
            выполненной работы, тоже укажите.
          </sub>
          <div className={classes.ctaContainer} >
            <p className={classesPashaSection.p}>
              Напишите задачи в эту форму.
            </p>
            <div className={classesSection.columnCenter}>
              <ButtonTasks />
            </div>
          </div>
          <p className={classesPashaSection.p}>
            На указанный e-mail в течение 24 часов придет ответ.
          </p>
          <sub className={classes.sub}>
            В письме вы получите наиболее подходящую под задачи должность
            и ссылку на подготовленное описание вакансии.
          </sub>
        </div>
      </div>
    </>
  );
};
