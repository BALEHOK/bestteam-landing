import { createUseStyles } from 'react-jss';
import { TFunction1 } from '../lib/functionTypes';
import { Input } from './input';
import { Label } from './label';

interface Props {
  text: string;
  placeholder?: string,
  value: string,
  onChange: TFunction1<string>,
}

const useStyles = createUseStyles({
  root: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: { width: '90px' },
  input: { marginLeft: '15px', width: '300px' }
});

export const InputGroup = ({ text, ...inputProps }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Label text={text} className={classes.label} />
      <Input className={classes.input} {...inputProps} />
    </div>
  );
};
