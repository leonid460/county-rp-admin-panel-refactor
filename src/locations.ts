import * as routes from 'routes';

type Location = {
  description: string;
  name: string;
  route: string;
  subLocations?: Location[];
};

export const locations: Location[] = [
  {
    name: 'Игроки',
    description: '',
    route: routes.players
  },
  {
    name: 'Группы',
    description: '',
    route: routes.group
  },
  {
    name: 'Персонажи',
    description: '',
    route: routes.person
  },
  {
    name: 'Фракции',
    description: '',
    route: routes.faction
  },
  {
    name: 'AdminLevel',
    description: '',
    route: routes.adminLevel
  },
  {
    name: 'Логи',
    description: '',
    route: routes.log
  }
];

if (process.env.REACT_APP_DEV_MODE === 'true') {
  locations.push({
    name: 'Тестовая комната',
    description: 'Ничего странного здесь не происходит',
    route: routes.testRoom
  });
}
