interface IPerson {
  person: {
    id: number;
    name: string;
    playerId: number;
    factionId: string;
  };

  faction: {
    id: string;
    name: string;
    ranks: string[];
  };

  vehicles: {
    id: number;
    personId: number;
  }[];
}

export interface IUserProfile {
  player: {
    id: number;
    login: string;
  };

  persons: IPerson[];
}
