import { mount, shallow } from 'enzyme';
import { ReactElement } from 'react';

export const itRenders = <P>(
  component: ReactElement<P>,
  name = 'renders without crashing',
  fullMount = false,
) => {
  it(name, () => {
    const tree = fullMount ? mount(component) : shallow(component);
    expect(tree).toMatchSnapshot();
  });
};
