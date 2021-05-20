import React from 'react';
import { itRenders } from '../testUtils/itRenders';
import { Button, ButtonType } from './button';

describe('button', () => {
  itRenders(<Button onClick={jest.fn()}>default</Button>, 'it renders default button');
  itRenders(<Button onClick={jest.fn()} type={ButtonType.primary}>primary</Button>, 'it renders primary button');
  itRenders(<Button onClick={jest.fn()} type={ButtonType.secondary}>secondary</Button>, 'it renders secondary button');
});