import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { useStore } from 'stores';
import { createAuthStore } from 'stores/authStore';
import { createCommonStore } from 'stores/commonStore';
import { createUserStore } from 'stores/userStore';
import { act } from 'react-dom/test-utils';
import { mocked } from 'ts-jest/utils';
import { mount } from 'enzyme';
import { auth } from 'api';
import { root } from 'routes';
import { GlobalStylesProvider } from 'App/GlobalStylesWrapper';
import { darkTheme as theme } from 'themes';
import { AuthForm } from './AuthForm';

jest.mock('stores', () => {
  return {
    useStore: jest.fn()
  };
});

jest.mock('api', () => {
  return {
    auth: jest.fn()
  };
});

beforeEach(() => {
  mocked(useStore).mockClear();
  mocked(auth).mockClear();
});

describe('AuthForm', () => {
  const username = 'test-login';
  const password = 'test-password';
  const history = createMemoryHistory({ initialEntries: ['auth'] });
  const stores = {
    authStore: createAuthStore(),
    commonStore: createCommonStore(),
    userStore: createUserStore()
  };

  it('navigates home when auth is successful', async () => {
    mocked(useStore).mockImplementation(() => stores);
    mocked(auth).mockImplementation(() => {
      return Promise.resolve({});
    });

    const wrapper = mount(
      <Router history={history}>
        <GlobalStylesProvider theme={theme}>
          <AuthForm />
        </GlobalStylesProvider>
      </Router>
    );

    wrapper.find('input[type="text"]').simulate('change', { target: { value: username } });

    wrapper.find('input[type="password"]').simulate('change', { target: { value: password } });

    wrapper.update();

    await act(async () => {
      wrapper.find('input[type="submit"]').simulate('click', {
        preventDefault: jest.fn()
      });
    });

    expect(history.location.pathname).toBe(root);
    expect(stores.authStore.username).toBe(username);
    expect(stores.authStore.password).toBe(password);
    expect(stores.authStore.isAuthorized).toBe(true);
  });
});
