import { createUseStyles } from 'react-jss';
import { mediaQueries } from './lib/styleUtils';
import { FramedSection } from './components/framedSection';
import { useSectionStyles } from './section.styles';
import { ButtonTasks } from './components/buttonTasks';

const useStyles = createUseStyles({
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


});

export const SectionUtp = () => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <FramedSection>
      <h1 className={classesSection.h1}>
        Напишите задачи будущего сотрудника и получи на e-mail готовое
        на 80% описание вакансии
      </h1>
      <div className={classes.points}>
        <div className={classesSection.point}>
          ответим на вопрос КТО нужен, те поможем разобраться какая должность
          наилучшим образом соответсвует задачам
        </div>
        <div className={classesSection.point}>
          максимально конкретно и ясно сформулируем задачи так, что будет
          понятно даже твоей маме
        </div>
        <div className={classesSection.point}>
          предложим на выбор &quot;продающие&quot; варианты описания
          компании и продукта, требуемого опыта и нефинансовых бенефитов
        </div>
        <div className={classesSection.point}>
          подскажем, как лучше дать информацию о зарплате и бонусах
        </div>
      </div>
      <ButtonTasks />
    </FramedSection>
  );
};
