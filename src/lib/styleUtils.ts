export const mediaBreakpoints = {
  xs: 600,
  md: 1280,
  lg: 1920
};

const makeMediaQuery = (upOrDown: 'up' | 'down', width: number) =>
  `@media (${upOrDown === 'up' ? 'min' : 'max'}-width: ${width}px)`;

export const mediaQueries = {
  downXs: makeMediaQuery('down', mediaBreakpoints.xs),
  upXs: makeMediaQuery('up', mediaBreakpoints.xs),
  downMd: makeMediaQuery('down', mediaBreakpoints.md),
  upMd: makeMediaQuery('up', mediaBreakpoints.md),
  downLg: makeMediaQuery('down', mediaBreakpoints.lg),
  upLg: makeMediaQuery('up', mediaBreakpoints.lg),
};

export const fonts = {
  bt: '"BT Regular", Verdana',
  primary: '"Avenir Next", Roboto'
};

export const colors = {
  lightBlue: '#cfe1ed',
  blue: '#698dbe',
  darkBlue: '#2f4c76',
  beige: '#f5f2e9',
  orange: '#ec9a36',
  orange2: '#e2931d',
};
