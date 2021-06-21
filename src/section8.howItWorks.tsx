import classNames from 'classnames';
import { ButtonTasks } from './components/buttonTasks';
import { createUseStyles } from 'react-jss';
import pasha6 from './assets/pasha6.svg';
import arrowDown from './assets/arrow-down.svg';
import oval1 from './assets/oval1.svg';
import oval2 from './assets/oval2.svg';
import { mediaQueries } from './lib/styleUtils';
import { usePashaSectionStyles, useSectionStyles } from './section.styles';

export const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    [mediaQueries.upXs]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
  textContainer: {
    position: 'relative',
    textAlign: 'center',
    maxWidth: 650,
  },
  oval1: {
    position: 'absolute',
    zIndex: -1,
    transform: 'translate3d(15%, -10px, 0)',
    height: 110,
    [mediaQueries.upXs]: {
      height: 220,
      transform: 'translate3d(-50%, -30px, 0)',
    },
    [mediaQueries.upLg]: {
      height: 450,
    },
  },
  oval2: {
    position: 'absolute',
    zIndex: -1,
    height: 120,
    left: '10%',
    [mediaQueries.upXs]: {
      height: 240,
    },
    [mediaQueries.upLg]: {
      height: 480,
    },
  },
  ctaContainer: {
    position: 'relative',
    [mediaQueries.downXs]: {
      margin: '0 auto',
      maxWidth: 350,
    },
    [mediaQueries.upMd]: {
      margin: '0 95px',
      maxWidth: 420,
    },
    [mediaQueries.upLg]: {
      margin: '0 115px',
    },
  },
  arrowDownImage: {
    position: 'absolute',
    top: '20%',
    right: 0,
    height: '50%',
    [mediaQueries.upXs]: {
      right: -30,
    },
    [mediaQueries.upMd]: {
      top: '20%',
      right: -30,
      height: '50%',
    },
    [mediaQueries.upLg]: {
      right: -90,
    },
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
  },
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
          alt="Опишите задачи для будущего сотрудника"
        />
        <div className={classes.textContainer}>
          <img src={oval1} className={classes.oval1} />
          <p className={classesPashaSection.p}>
            Опишите задачи для будущего сотрудника.
          </p>
          <sub className={classes.sub}>
            Не думайте над правильными формулировками. Если понимаете, какой
            нужен результат от выполненной работы, тоже укажите.
          </sub>
          <div className={classes.ctaContainer}>
            <img src={arrowDown} className={classes.arrowDownImage} />
            <p className={classesPashaSection.p}>
              Напишите задачи в эту форму.
            </p>
            <ButtonTasks />
          </div>
          <sub className={classes.sub}>
            На указанный e-mail в течение 24 часов придет ответ.
          </sub>
          <p className={classesPashaSection.p}>
            Вы получите наиболее подходящую под задачи должность и
            подготовленное описание вакансии.
          </p>
        </div>
      </div>

      <img src={oval2} className={classes.oval2} />
      <p
        className={classNames(
          classesSection.marginTop,
          classesSection.p,
          classesSection.fullWidthText
        )}
      >
        Мы искренне хотим вам помочь найти лучшего человека в команду, поэтому
        формальных, неискренних и халтурных описаний вакансий с нашей стороны не
        ждите!
      </p>
    </>
  );
};
