import { ChangeEvent, CSSProperties } from 'react';
import classNames from 'classnames';
import { TFunction1 } from '../lib/functionTypes';
import { createUseStyles } from 'react-jss';

export interface Props {
  className?: string
  onChange: TFunction1<string>,
  placeholder?: string,
  value: string,
}

const useStyles = createUseStyles({
  root: {
    height: '52px',
    fontSize: '16px',
    color: 'rgb(17, 20, 45)',
    padding: '5px 15px',
    backgroundColor: 'rgb(247, 247, 247)',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: 'rgba(79, 149, 255, 0)',
    borderRadius: '12px',
  }
});

export const Input = ({ onChange: onChangeProp, className, ...rest }: Props) => {
  const classes = useStyles();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => onChangeProp(event.target.value);

  return (
    <input
      className={classNames(classes.root, classNames)}
      type="text" onChange={onChange} {...rest} />
  );
};
