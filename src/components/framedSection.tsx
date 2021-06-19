import classnames from 'classnames';
import { ReactNode } from 'react';
import { createUseStyles } from 'react-jss';
import { colors, mediaQueries } from '../lib/styleUtils';
import { useSectionStyles } from '../section.styles';

interface Props {
  children: ReactNode;
}

const useStyles = createUseStyles({
  root: {
    border: `1px solid ${colors.orange2}`,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 25px',
    [mediaQueries.upXs]: {
      padding: '40px 51px',
    },
    [mediaQueries.upLg]: {
      padding: '80px 102px',
    },
  },
});

export const FramedSection = ({ children }: Props) => {
  const classes = useStyles();
  const classesSection = useSectionStyles();

  return (
    <div className={classnames(classesSection.marginTop, classes.root)}>
      {children}
    </div>
  );
};
