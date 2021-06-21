import classNames from 'classnames';
import { createUseStyles } from 'react-jss';
import { useSectionStyles } from './section.styles';
import ovalBlue from './assets/oval-blue.svg';
import { mediaQueries } from './lib/styleUtils';

const useStyles = createUseStyles({
  resultSection: {
    backgroundImage: `url(${ovalBlue})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    justifyContent: 'center',
    minHeight: 200,
    [mediaQueries.downXs]: {
      width: '100%',
      backgroundSize: 'auto 100%',
    },
    [mediaQueries.upXs]: {
      height: 415,
      backgroundSize: 'auto 415px',
    },
    [mediaQueries.upLg]: {
      height: 830,
      backgroundSize: 'auto 830px',
    },

    '& p': {
      textAlign: 'center',
      [mediaQueries.downXs]: {
        width: '70%',
      },
      [mediaQueries.upXs]: {
        width: 500,
      },
      [mediaQueries.upLg]: {
        width: 1000,
      },
    },
  },
});

export const SectionNeedBT = () => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <>
      <div className={classesSection.marginTop}>
        <p className={classesSection.p}>
          Паше нужен сервис &quot;BestTeam&quot;. Он поможет разобраться с тем
        </p>
        <div>
          <div className={classesSection.point}>
            какая должность наилучшим образом соответствует задачам
          </div>
          <div className={classesSection.point}>
            как грамотно сформулировать описание вакансии и получить релевантные
            отклики
          </div>
          <div className={classesSection.point}>
            как оценить кандидатов на этапе найма и во время испытательного
            срока
          </div>
        </div>
      </div>
      <div
        className={classNames(
          classesSection.marginTop,
          classesSection.columnCenter,
          classes.resultSection
        )}
      >
        <h2 className={classesSection.h2}>Результат</h2>
        <p className={classesSection.p}>
          Паша поймет, кого конкретно искать и снизит риск нанять &quot;не того
          человека&quot;.
        </p>
      </div>
    </>
  );
};
