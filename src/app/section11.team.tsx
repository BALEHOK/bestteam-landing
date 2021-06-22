import React from 'react';
import { createUseStyles } from 'react-jss';
import { colors, mediaQueries } from './lib/styleUtils';
import { FramedSection } from './components/framedSection';
import { useSectionStyles } from './section.styles';
import halfOvalBeige from './assets/half-oval-beige.svg';
import halfOvalBlue from './assets/half-oval-blue.svg';
import aleksandrShukletsov from './assets/aleksandr-shukletsov.jpg';
import mariaPankina from './assets/maria-pankina.jpg';
import classNames from 'classnames';

const useStyles = createUseStyles({
  aboutContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    [mediaQueries.downXs]: {
      flexDirection: 'column',
    },
  },
  imagesContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  halfOval: {
    [mediaQueries.downXs]: {
      width: '50%',
    },
    [mediaQueries.upXs]: {
      height: 300,
    },
    [mediaQueries.upLg]: {
      height: 830,
    },
  },
  photo: {
    borderRadius: '50%',
    position: 'absolute',
    [mediaQueries.downXs]: {
      width: '45%',
      right: '50%',
      transform: 'translate3d(50%, 0, 0)',
    },
    [mediaQueries.upXs]: {
      width: 180,
      right: -40,
    },
    [mediaQueries.upLg]: {
      width: 492,
      right: -100,
      top: 145,
    },
  },
  blueBorder: {
    border: `2px solid ${colors.lightBlue}`,
  },
  beigeBorder: {
    border: `2px solid ${colors.beige}`,
  },

  textContainer: {
    [mediaQueries.downXs]: {
      '& h3': {
        textAlign: 'center',
      },
    },

    [mediaQueries.upXs]: {
      marginLeft: 100,

      '& h3': {
        marginTop: 0,
      },
    },
    [mediaQueries.upLg]: {
      marginLeft: 185,
    },
  },
});

export const Section11Team = () => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <FramedSection>
      <h2 className={classesSection.h2}>Кто мы и почему нам стоит доверять?</h2>
      <div
        className={classNames(classesSection.marginTop, classes.aboutContainer)}
      >
        <div className={classes.imagesContainer}>
          <img
            className={classes.halfOval}
            src={halfOvalBeige}
            alt="бекграунд"
          />
          <img
            className={classNames(classes.blueBorder, classes.photo)}
            src={mariaPankina}
            alt="Мария Панькина"
          />
        </div>
        <div className={classes.textContainer}>
          <h3 className={classesSection.h3}>Мария Панькина</h3>
          <p className={classesSection.text}>
            Я не профессиональный рекрутер и хорошо понимаю проблемы
            предпринимателей, особенно на старте:
            <ul>
              <li>Высокий риск и большая неопределенность;</li>
              <li>Как заинтересовать профессионалов?</li>
              <li>На каких условиях ко мне придут?</li>
              <li>
                А какие условия я могу позволить в рамках своего скромного
                бюджета?
              </li>
              <li>
                Как оценить человека, с задачами которого раньше не сталкивалась
                и с людьми на таких позициях не работала?
              </li>
              <li> Где их искать?</li>
              <li> Сотрудник или партнер по бизнесу? </li>
              <li>Аутсорсинг или в свою команду?</li>
              <li> Фикс на полный рабочий день или почасовая оплата?</li>
            </ul>
            Дважды с нуля формировала команду стартапов, искала разработчиков,
            проджект-менеджера, скрам-мастера, маркетолога, исполнительного
            директора. Более 8 лет опыта в B2B медицинском бизнесе, в том числе
            на управленческой позиции.
            <br />
            <br />
            Убеждена, что ключ к успеху любого бизнеса - это люди, головами и
            руками которых он делается.
          </p>
        </div>
      </div>
      <div
        className={classNames(classesSection.marginTop, classes.aboutContainer)}
      >
        <div className={classes.imagesContainer}>
          <img
            className={classes.halfOval}
            src={halfOvalBlue}
            alt="бекграунд"
          />
          <img
            className={classNames(classes.beigeBorder, classes.photo)}
            src={aleksandrShukletsov}
            alt="Александр Шуклецов"
          />
        </div>
        <div className={classes.textContainer}>
          <h3 className={classesSection.h3}>Александр Шуклецов</h3>
          <p className={classesSection.text}>
            Я - профессиональный инженер. Отлично разбираюсь в современных
            технологиях.
            <ul>
              <li>Более 10 лет опыта в IT.</li>
              <li>Руководил командами разработчиков в России и за рубежом.</li>
              <li>Работал в ентерпрайзе и стартапах.</li>
              <li>
                Проводил технические собеседования с программистами всех
                уровней.
              </li>
              <li>Нанимал людей для собственной онлайн школы.</li>
            </ul>
            Верю, что не надо делать самому то, что не умеешь. Вместо этого
            лучше сфокусироваться на задачах бизнеса, в которых разбираешься и
            заработать больше денег.
          </p>
        </div>
      </div>
    </FramedSection>
  );
};
