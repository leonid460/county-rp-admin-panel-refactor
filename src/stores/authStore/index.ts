import { observable, action, decorate } from 'mobx';
import { auth, deAuth } from 'api';
import { callNotification } from 'utils';

export const createAuthStore = () => {
  const store = {
    username: '',
    password: '',
    isLoading: false,
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
      store.isLoading = true;
      store.setIsAuthorized(false);

      try {
        await auth(store.username, store.password);
        store.setIsAuthorized(true);
        callNotification({
          header: 'Добро пожаловать',
          content: 'Хеллоу =^.^=',
          type: 'info'
        });
      } catch (error) {
        store.setPassword('');
        callNotification({
          header: 'Ошибка',
          content: error.message,
          type: 'error'
        });
      } finally {
        store.isLoading = false;
      }
    },

    logout: async () => {
      store.isLoading = true;

      await deAuth();

      store.setIsAuthorized(false);
      store.isLoading = false;
    }
  };

  return decorate(store, {
    username: observable,
    password: observable,
    isLoading: observable,
    isAuthorized: observable,
    setUsername: action,
    setPassword: action,
    reset: action,
    setIsAuthorized: action,
    login: action,
    logout: action
  });
};

export type AuthStore = ReturnType<typeof createAuthStore>;
