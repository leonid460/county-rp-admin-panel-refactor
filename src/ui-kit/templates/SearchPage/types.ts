export interface ISearchPageProps {
  actions: {
    name: string;
    route: string;
  }[];

  filterFields: {
    name: string;
    propKey: string;
  }[];

  apiCall: (page: number, data: { [key: string]: string }) => Promise<{ [key: string]: string }[]>;

  tableColumnNames: string[];
  editRoute?: string;
}
