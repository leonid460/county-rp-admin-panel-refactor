import { observable, action, decorate } from 'mobx';
import { IUserPerson } from 'types';
import { getUserProfile } from 'api';

export const createUserStore = () => {
  const store = {
    currentUser: {
      id: NaN,
      username: ''
    },
    persons: [] as IUserPerson[],
    isLoading: false,

    getUserInfo: async (username: string) => {
      store.isLoading = true;
      const profile = await getUserProfile(username);

      store.currentUser.id = profile.player.id;
      store.currentUser.username = profile.player.login;

      profile.persons.map((personItem) =>
        store.persons.push({
          personInfo: personItem.personInfo,
          faction: personItem.faction,
          vehicles: personItem.vehicles
        })
      );

      store.isLoading = false;
    }
  };

  return decorate(store, {
    currentUser: observable,
    isLoading: observable,
    getUserInfo: action
  });
};

export type UserStore = ReturnType<typeof createUserStore>;
