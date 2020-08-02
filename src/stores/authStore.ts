import { observable, action, decorate } from 'mobx';
import { auth } from 'api';

export const createAuthStore = () => {
  const store = {
    username: '',
    password: '',
    inProgress: false,
    isAuthorized: false,

    setUsername: (username: string) => {
      store.username = username;
    },

    setPassword: (password: string) => {
      store.password = password;
    },

    reset: () => {
      store.username = '';
      store.password = '';
    },

    setIsAuthorized: (status: boolean) => {
      store.isAuthorized = status;
    },

    login: async () => {
      store.inProgress = true;
      store.setIsAuthorized(false);

      try {
        await auth(store.username, store.password);
        store.setIsAuthorized(true);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        store.setPassword('');
      } finally {
        store.inProgress = false;
      }
    }
  };

  return decorate(store, {
    username: observable,
    password: observable,
    inProgress: observable,
    isAuthorized: observable,
    setUsername: action,
    setPassword: action,
    reset: action,
    setIsAuthorized: action,
    login: action
  });
};

export type AuthStore = ReturnType<typeof createAuthStore>;
