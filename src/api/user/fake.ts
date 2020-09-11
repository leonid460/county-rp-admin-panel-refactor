import { get } from '../requests';
import { IUserProfile, IUserProfileFromApi } from './types';

const apiRoot = process.env.REACT_APP_API_URL;

export async function getUserProfile(username: string): Promise<IUserProfile> {
  const url = apiRoot + 'Profile?login=' + username;

  const packedProfile = await get(url);
  const unpackedProfile: IUserProfileFromApi = packedProfile[0];

  if (!unpackedProfile) {
    return null;
  }

  return {
    player: {
      id: unpackedProfile.player.id,
      login: unpackedProfile.player.login
    },

    persons: unpackedProfile.persons.map((personItem) => ({
      personInfo: {
        id: personItem.person.id || NaN,
        name: personItem.person.name || '',
        playerId: personItem.person.playerId || NaN,
        factionId: personItem.person.factionId || ''
      },

      faction: {
        id: personItem.faction.id || '',
        name: personItem.faction.name || '',
        ranks: personItem.faction.ranks || []
      },

      vehicles: personItem.vehicles || []
    }))
  };
}
