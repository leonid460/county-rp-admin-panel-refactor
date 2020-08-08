import React from 'react';
import { shallow } from 'enzyme';
import { AdminPanel } from './index';

describe('AdminPanel', () => {
  it('renders without crashing', () => {
    shallow(<AdminPanel />);
  });
});
