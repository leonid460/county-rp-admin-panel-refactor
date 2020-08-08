import { createAuthStore } from './index';
import { auth } from 'api';
import { mocked } from 'ts-jest/utils';

jest.mock('api', () => {
  return {
    auth: jest.fn()
  };
});

beforeEach(() => {
  mocked(auth).mockClear();
});

describe('authStore', () => {
  const username = 'test-login';
  const password = 'test-password';

  it('makes log in successfully', async () => {
    mocked(auth).mockImplementation(() => {
      return Promise.resolve({});
    });

    const store = createAuthStore();
    store.setUsername(username);
    store.setPassword(password);

    await store.login();

    expect(mocked(auth).mock.calls.length).toBe(1);
    expect(store.username).toBe(username);
    expect(store.password).toBe(password);
    expect(store.isLoading).toBe(false);
    expect(store.isAuthorized).toBe(true);
  });

  it('handles error correctly', async () => {
    mocked(auth).mockImplementation(() => {
      throw new Error('test error');
    });

    const store = createAuthStore();
    store.setUsername(username);
    store.setPassword(password);

    await store.login();

    expect(mocked(auth).mock.calls.length).toBe(1);
    expect(store.username).toBe(username);
    expect(store.password).toBe('');
    expect(store.isLoading).toBe(false);
    expect(store.isAuthorized).toBe(false);
  });
});
