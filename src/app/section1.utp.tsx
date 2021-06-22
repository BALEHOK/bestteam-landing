import React from 'react';
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
      width: 600,
    },
    [mediaQueries.upLg]: {
      margin: '60px 190px 0',
      width: 'auto',
    },
  },
});

export const SectionUtp = () => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <FramedSection>
      <h1 className={classesSection.h1}>
        Опишите задачи будущего сотрудника и получите готовый текст вакансии
      </h1>
      <div className={classes.points}>
        <div className={classesSection.point}>
          составим детальный профиль кандидата и выберем наиболее подходящую
          должность
        </div>
        <div className={classesSection.point}>
          максимально конкретно и ясно сформулируем задачи так, что будет
          понятно даже вашей маме
        </div>
        <div className={classesSection.point}>
          предложим на выбор &quot;цепляющие&quot; варианты описания компании и
          продукта, требуемого опыта и нефинансовых бенефитов
        </div>
        <div className={classesSection.point}>
          подскажем, как лучше дать информацию о зарплате и бонусах
        </div>
      </div>
      <ButtonTasks />
    </FramedSection>
  );
};
