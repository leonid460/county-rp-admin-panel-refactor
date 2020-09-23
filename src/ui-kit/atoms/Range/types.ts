export interface IRangeProps {
  min: number;
  max: number;
  value: number;
  setValue: (newValue: number) => void;
  barBackground?: string;
}
