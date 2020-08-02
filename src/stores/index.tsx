import React from 'react';
import { useLocalStore } from 'mobx-react';
import { createAuthStore, AuthStore } from './authStore';
import { createCommonStore, CommonStore } from './commonStore';
import { createUserStore, UserStore } from './userStore';

const storeContext = React.createContext<{
  authStore: AuthStore;
  commonStore: CommonStore;
  userStore: UserStore;
} | null>(null);

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const authStore = useLocalStore(createAuthStore);
  const commonStore = useLocalStore(createCommonStore);
  const userStore = useLocalStore(createUserStore);

  return (
    <storeContext.Provider
      value={{
        authStore,
        commonStore,
        userStore
      }}
    >
      {children}
    </storeContext.Provider>
  );
};

export const storeWrapper = (WrappedComponent: React.ComponentType): React.FC => () => (
  <StoreProvider>
    <WrappedComponent />
  </StoreProvider>
);

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
