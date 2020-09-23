export interface IRangeProps {
  className?: string;
  min: number;
  max: number;
  value: number;
  setValue: (newValue: number) => void;
  trackColor?: string;
}
