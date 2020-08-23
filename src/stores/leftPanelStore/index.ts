import { observable, action, decorate } from 'mobx';

export const createLeftPanelStore = () => {
  const store = {
    isOpen: false,

    setIsOpen: (newStatus: boolean) => {
      store.isOpen = newStatus;
    },

    toggle: () => {
      store.isOpen = !store.isOpen;
    }
  };

  return decorate(store, {
    isOpen: observable,
    setIsOpen: action,
    toggle: action
  });
};

export type LeftPanelStore = ReturnType<typeof createLeftPanelStore>;
