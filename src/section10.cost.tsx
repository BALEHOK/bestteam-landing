import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { useSectionStyles } from './section.styles';
import pasha7cost from './assets/pasha7.cost.svg';
import { mediaQueries } from './lib/styleUtils';
import oval1beige from './assets/oval1-beige.svg';

const useStyles = createUseStyles({
  root: {
    position: 'relative',
  },
  image: {
    [mediaQueries.downXs]: {
      width: '100%',
    },
    [mediaQueries.upXs]: {
      width: 300,
      transform: 'translate3d(50px, 0, 0)',
    },
    [mediaQueries.upMd]: {
      width: 440,
      transform: 'translate3d(80px, 0, 0)',
    },
    [mediaQueries.upLg]: {
      width: 970,
      transform: 'translate3d(150px, 0, 0)',
    },
  },
  oval1beige: {
    position: 'absolute',
    zIndex: -1,
    height: 70,
    bottom: 0,
    [mediaQueries.upXs]: {
      height: 120,
    },
    [mediaQueries.upLg]: {
      height: 250,
    },
  },
});

export const SectionCost = () => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <div
      className={classNames(
        classesSection.marginTop,
        classesSection.columnCenter,
        classes.root
      )}
    >
      <img
        className={classes.image}
        src={pasha7cost}
        alt="Опишите задачи для будущего сотрудника"
      />
      <img src={oval1beige} className={classes.oval1beige} />
      <p className={classNames(classesSection.p, classesSection.fullWidthText)}>
        Первые пользователи получают услугу бесплатно. Взамен мы просим только
        отзыв, который сможем разместить у нас на сайте и все. Если мы тебе
        помогли ответить на вопрос “Кто нужен”, то оставь свой отзыв и
        порекомендуй знакомым. Если мы не помогли, то тем более оставляй отзыв.
        Мы будем рады подробной обратной связи хоть письменно, хоть голосом.
      </p>
    </div>
  );
};
