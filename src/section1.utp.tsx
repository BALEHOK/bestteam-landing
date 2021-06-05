import { createUseStyles } from 'react-jss';
import { colors, mediaQueries } from './lib/styleUtils';
import { FramedSection } from './components/framedSection';
import flagBullet from './assets/flag-bullet.svg';
import { Button } from './components/button';

const useStyles = createUseStyles({
  h1: {
    color: colors.darkerBlue,
    fontSize: 22,
    [mediaQueries.upXs]: {
      fontSize: 32,
    },
    [mediaQueries.upLg]: {
      fontSize: 65,
    },
  },
  points: {
    margin: '35px 0 0',
    [mediaQueries.upXs]: {
      margin: '50px auto 0',
      width: 600
    },
    [mediaQueries.upLg]: {
      margin: '60px 190px 0',
      width: 'auto'
    },
  },
  point: {
    backgroundImage: `url(${flagBullet})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left top 8px',
    backgroundSize: 22,
    minHeight: 36,
    paddingLeft: 30,
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    [mediaQueries.upXs]: {
      backgroundPosition: 'left top 7px',
      backgroundSize: 32,
      minHeight: 36,
      paddingLeft: 45,
      fontSize: 17,
    },
    [mediaQueries.upLg]: {
      backgroundPosition: 'left top 14px',
      backgroundSize: 64,
      minHeight: 72,
      paddingLeft: 90,
      fontSize: 32,
    },

    '& + &': {
      marginTop: 30
    }
  },
  button: {
    marginTop: 45,
    [mediaQueries.upXs]: {
      marginTop: 60,
    },
    [mediaQueries.upLg]: {
      marginTop: 80
    },
  }

});

export const SectionUtp = () => {
  const classes = useStyles();

  return (
    <FramedSection>
      <h1 className={classes.h1}>Напиши задачи будущего сотрудника
        и получи на e-mail готовое на 80% описание вакансии</h1>
      <div className={classes.points}>
        <div className={classes.point}>
          ответим на вопрос КТО нужен, те поможем разобраться какая должность
          наилучшим образом соответсвует задачам
        </div>
        <div className={classes.point}>
          максимально конкретно и ясно сформулируем задачи так, что будет
          понятно даже твоей маме
        </div>
        <div className={classes.point}>
          предложим на выбор &quot;продающие&quot; варианты описания
          компании и продукта, требуемого опыта и нефинансовых бенефитов
        </div>
        <div className={classes.point}>
          подскажем, как лучше дать информацию о зарплате и бонусах
        </div>
      </div>
      <Button className={classes.button} onClick={() => console.log('a')}>
        Написать задачи
      </Button>
    </FramedSection>
  );
};
