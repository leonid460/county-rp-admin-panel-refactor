export interface IFilterField {
  name: string;
  value: string;
  setValue: (value: string) => void;
}

export interface IFilterProps {
  fields: IFilterField[];
}
