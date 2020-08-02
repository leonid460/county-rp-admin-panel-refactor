import { observable, action, decorate } from 'mobx';
import { IPerson } from 'types';
import { getUserProfile } from 'api';

export const createUserStore = () => {
  const store = {
    currentUser: {
      id: NaN,
      username: ''
    },
    persons: [] as IPerson[],
    loadingUser: false,
    updatingUser: false,
    updatingUserError: undefined as Error | undefined,

    async getUserInfo(username: string) {
      this.loadingUser = true;
      const profile = await getUserProfile(username);

      this.currentUser.id = profile.player.id;
      this.currentUser.username = profile.player.login;

      profile.persons.map((personItem) =>
        this.persons.push({
          person: personItem.person,
          faction: personItem.faction,
          vehicles: personItem.vehicles
        })
      );
    }
  };

  return decorate(store, {
    currentUser: observable,
    loadingUser: observable,
    updatingUser: observable,
    updatingUserError: observable,
    getUserInfo: action
  });
};

export type UserStore = ReturnType<typeof createUserStore>;
