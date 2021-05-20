import { TFunction } from '../lib/functionTypes';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

export enum ButtonType {
    primary = 'primary',
    secondary = 'secondary'
}

export interface Props {
    children: string,
    className?: string
    onClick: TFunction,
    type?: ButtonType,
}

const useStyles = createUseStyles({
  root: {
    height: '58px',
    width: '180px',
    border: 'none',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 500,
    borderRadius: '12px',
    transition: 'box-shadow 200ms ease 0s, background 200ms ease 0s',
    boxShadow: 'none',
  },
  primaryButtonStyle: {
    background: 'rgb(17, 20, 45)',
    color: 'rgb(255, 255, 255)',
  },
  secondaryButtonStyle: {
    background: 'rgb(228, 228, 228)',
    color: 'rgb(17, 20, 45)',
  }
});

export const Button = ({ type, children, onClick, className }: Props) => {
  const classes = useStyles();

  let buttonTypeClass: string;
  switch (type) {
    case ButtonType.secondary:
      buttonTypeClass = classes.secondaryButtonStyle;
      break;
    default:
      buttonTypeClass = classes.primaryButtonStyle;
  }

  return (
    <button className={classNames(
      classes.root,
      buttonTypeClass,
      className)}
    onClick={onClick}>{children}</button>
  );
};