export type TPerson = {
  name: string;
  faction: {
    name: string;
    id: string;
  };
  vehicles: {
    id: string;
  }[];
};
