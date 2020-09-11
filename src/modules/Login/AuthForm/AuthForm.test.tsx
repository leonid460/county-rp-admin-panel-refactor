import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { act } from 'react-dom/test-utils';
import { mocked } from 'ts-jest/utils';
import { mount } from 'enzyme';
import { auth } from 'api';
import * as routes from 'routes';
import { GlobalStylesProvider } from 'App/GlobalStylesWrapper';
import { darkTheme as theme } from 'themes';
import { AuthForm } from './AuthForm';
import { storeWrapper } from 'store';

jest.mock('api', () => {
  return {
    auth: jest.fn()
  };
});

beforeEach(() => {
  mocked(auth).mockClear();
});

describe('AuthForm', () => {
  const username = 'test-login';
  const password = 'test-password';
  const history = createMemoryHistory({ initialEntries: [routes.auth] });

  it('navigates home when auth is successful', async () => {
    mocked(auth).mockImplementation(() => {
      return Promise.resolve({});
    });

    const tree = storeWrapper(() => (
      <Router history={history}>
        <GlobalStylesProvider theme={theme}>
          <AuthForm />
        </GlobalStylesProvider>
      </Router>
    ));

    expect(history.location.pathname).toBe(routes.auth);

    const wrapper = mount(tree({}));
    wrapper.find('input[type="text"]').simulate('change', { target: { value: username } });
    wrapper.find('input[type="password"]').simulate('change', { target: { value: password } });
    wrapper.update();

    await act(async () => {
      wrapper.find('input[type="submit"]').simulate('click', {
        preventDefault: jest.fn()
      });
    });

    expect(history.location.pathname).toBe(routes.root);
  });
});
