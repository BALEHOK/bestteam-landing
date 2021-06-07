import { Header } from './header';
import { createUseStyles } from 'react-jss';
import { fonts, mediaBreakpoints, mediaQueries } from './lib/styleUtils';
import { SectionUtp } from './section1.utp';
import React, { useState } from 'react';
import { SectionWelcomePasha } from './section2.welcomePasha';
import { SectionQuestions } from './section3.questions';
import { SectionHH } from './section4.hh';
import { Section4Hours2 } from './section5.4hours2';
import { SectionRightPeople } from './section6.rightPeople';
import { SectionNeedBT } from './section7.needBt';
import { Popup } from './popup';

const useStyles = createUseStyles({
  root: {
    fontFamily: fonts.primary,
    maxWidth: mediaBreakpoints.lg,
    margin: '0 auto',
    padding: 10,
    [mediaQueries.upXs]: {
      padding: 30
    },
    [mediaQueries.upLg]: {
      padding: 65
    },
  },
});

const sendTasks = (tasks, tryNumber = 1) => {
  fetch('http://localhost:4000/api/tasksInquiry', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(tasks)
  }).catch(() => {
    if (tryNumber < 3) {
      setTimeout(() => sendTasks(tasks, tryNumber + 1), 3000);
    } else {
      alert('Случилась какая-то ошибка и ваш запрос не был отправлен. '
        + 'Попробуйте еще раз или напишите нам на info@bestteam.io. '
        + 'Хорошего дня!');
    }
  });
};

const App = () => {
  const classes = useStyles();

  const [popupVisible, setPopupVisible] = useState(true);

  const onClose = () => setPopupVisible(false);
  const onTasksSubmit = (tasks) => {
    console.log(tasks);
    sendTasks(tasks);
    onClose();
  };

  return (
    <div className={classes.root}>
      <Header />
      <main>
        <SectionUtp />
        <SectionWelcomePasha />
        <SectionQuestions />
        <SectionHH />
        <Section4Hours2 />
        <SectionRightPeople />
        <SectionNeedBT />

      </main>

      {popupVisible &&
        <Popup onClose={onClose}
          onSubmit={onTasksSubmit} />
      }
    </div>
  );
};

export default App;
