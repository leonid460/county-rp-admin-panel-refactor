import { observable, action, reaction, decorate } from 'mobx';

export const createCommonStore = () => {
  const store = {
    token: window.localStorage.getItem('jwt'),
    appLoaded: false,

    setToken(token: string) {
      this.token = token;
    },

    setAppLoaded() {
      this.appLoaded = true;
    }
  };

  reaction(
    () => store.token,
    (token) => {
      if (token) {
        window.localStorage.setItem('jwt', token);
      } else {
        window.localStorage.removeItem('jwt');
      }
    }
  );

  return decorate(store, {
    token: observable,
    appLoaded: observable,
    setToken: action,
    setAppLoaded: action
  });
};

export type CommonStore = ReturnType<typeof createCommonStore>;
