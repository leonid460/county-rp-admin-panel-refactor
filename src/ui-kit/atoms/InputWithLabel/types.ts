import { IInputProps } from 'ui-kit/atoms/Input/types';

export interface IInputWithLabelProps extends IInputProps {
  label: string;
  className?: string;
}
