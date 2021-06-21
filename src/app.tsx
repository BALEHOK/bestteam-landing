import { Header } from './header';
import { createUseStyles } from 'react-jss';
import { fonts, mediaBreakpoints, mediaQueries } from './lib/styleUtils';
import { SectionUtp } from './section1.utp';
import { useState } from 'react';
import { SectionWelcomePasha } from './section2.welcomePasha';
import { SectionQuestions } from './section3.questions';
import { SectionHH } from './section4.hh';
import { Section4Hours2 } from './section5.4hours2';
import { SectionRightPeople } from './section6.rightPeople';
import { SectionNeedBT } from './section7.needBt';
import { Popup } from './popup';
import { AppContext } from './appContext';
import { Section8HowItWorks } from './section8.howItWorks';
import { Section11Team } from './section11.team';
import { Section10Cost } from './section10.cost';
import { Section12ToWhom } from './section12.toWhom';
import { Section13Reviews } from './section13.reviews';
import { Section14Deal } from './section14.deal';

const apiHost = process.env.REACT_APP_API_HOST || 'http://localhost:4000';

const useStyles = createUseStyles({
  root: {
    fontFamily: fonts.primary,
    maxWidth: mediaBreakpoints.xs,
    margin: '0 auto',
    padding: 10,
    [mediaQueries.upXs]: {
      padding: 30,
      maxWidth: 1024,
    },
    [mediaQueries.upMd]: {
      maxWidth: 1280,
    },
    [mediaQueries.upLg]: {
      padding: 65,
      maxWidth: 1920,
    },
  },
});

const sendTasks = (tasks, tryNumber = 1) => {
  fetch(`${apiHost}/api/tasksInquiry`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tasks),
  }).catch(() => {
    if (tryNumber < 3) {
      setTimeout(() => sendTasks(tasks, tryNumber + 1), 3000);
    } else {
      alert(
        'Случилась какая-то ошибка и ваш запрос не был отправлен. ' +
        'Попробуйте еще раз или напишите нам на info@bestteam.io. ' +
        'Хорошего дня!'
      );
    }
  });
};

const App = () => {
  const classes = useStyles();

  const [popupVisible, setPopupVisible] = useState(false);

  const onClose = () => setPopupVisible(false);
  const onTasksSubmit = (tasks) => {
    sendTasks(tasks);
    onClose();
  };

  return (
    <AppContext.Provider value={{ setPopupVisible }}>
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
          <Section8HowItWorks />
          <Section10Cost />
          <Section11Team />
          <Section12ToWhom />
          <Section13Reviews />
          <Section14Deal />
        </main>

        {popupVisible && <Popup onClose={onClose} onSubmit={onTasksSubmit} />}
      </div>
    </AppContext.Provider>
  );
};

export default App;
