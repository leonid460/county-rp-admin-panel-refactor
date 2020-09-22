export interface ISelectProps {
  options: { name: string; key: string }[];
  value: string;
  setValue: (value: string) => void;
}
