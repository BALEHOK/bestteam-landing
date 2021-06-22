import React from 'react';
import { useSectionStyles } from './section.styles';

export const Section12ToWhom = () => {
  const classesSection = useSectionStyles();

  return (
    <div className={classesSection.marginTop}>
      <p className={classesSection.p}>
        Кому будет полезно воспользоваться продуктом?
      </p>
      <div>
        <div className={classesSection.point}>
          <span>
            <b>Руководитель компании (отдела).</b>
            <br />
            Поймете, кто поможет быстрее и качественнее развивать бизнес.
          </span>
        </div>
        <div className={classesSection.point}>
          <span>
            <b>Директор малого бизнеса.</b>
            <br />
            Сможете четко сформулировать задачи и составить классную вакансию с
            целевыми откликами.
          </span>
        </div>
      </div>
    </div>
  );
};
