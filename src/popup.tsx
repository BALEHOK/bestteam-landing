import { createUseStyles } from 'react-jss';
import { Button } from './components/button';
import { TFunction, TFunction1 } from './lib/functionTypes';
import noScroll from 'no-scroll';
import { useState } from 'react';
import { colors, mediaQueries } from './lib/styleUtils';
import { useSectionStyles } from './section.styles';
import classNames from 'classnames';

export interface TasksSubmit {
  name: string;
  email: string;
  tasks: string;
}

interface Props {
  onClose: TFunction;
  onSubmit: TFunction1<TasksSubmit>;
}

export const useStyles = createUseStyles({
  root: {
    background: 'rgba(0,0,0,0.5)',
    bottom: 0,
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    right: 0,
    top: 0,
  },
  form: {
    backgroundColor: colors.lightBlue,
    padding: '5% 0',
    width: '98%',
    [mediaQueries.upXs]: {
      width: '50%',
    },
  },
  label: {
    color: colors.darkBlue,
    marginTop: 20,
    width: '80%',
  },
  input: {
    marginTop: 7,
    width: '80%',
    border: 'none',
    padding: '7px 5px',
  },
  dirty: {
    '& :invalid': {
      boxShadow: '0 0 5px 1px red',
    },
  },
  button: {
    marginTop: 20,
  },
});

export const Popup = ({ onClose, onSubmit }: Props) => {
  noScroll.on();
  const classes = useStyles();
  const sectionClasses = useSectionStyles();

  const [dirty, setDirty] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tasks, setTasks] = useState('');

  const closePopup = () => {
    noScroll.off();
    onClose();
  };

  const submit = () => {
    setDirty(true);

    if (!name || !email || !tasks) {
      return;
    }

    noScroll.off();

    onSubmit({
      name,
      email,
      tasks,
    });
  };

  return (
    <div
      className={classNames(classes.root, sectionClasses.columnCenter, {
        [classes.dirty]: dirty,
      })}
      onClick={closePopup}
    >
      <form
        className={classNames(classes.form, sectionClasses.columnCenter)}
        onClick={(e) => e.stopPropagation()}
        onSubmit={submit}
      >
        <span className={classNames(sectionClasses.p, classes.label)}>Имя</span>
        <input
          type="text"
          className={classes.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <span className={classNames(sectionClasses.p, classes.label)}>
          Телеграм (или email)
        </span>
        <input
          type="text"
          className={classes.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <span className={classNames(sectionClasses.p, classes.label)}>
          Задачи
        </span>
        <textarea
          rows={7}
          className={classes.input}
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
          required
        />

        <Button type="submit" className={classes.button}>
          Отправить
        </Button>
      </form>
    </div>
  );
};
