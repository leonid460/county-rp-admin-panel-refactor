import { Checkbox, withLabel } from 'ui-kit/atoms';
import { ICheckboxProps } from 'ui-kit/atoms/Checkbox/types';

export const CheckboxWithLabel = withLabel<ICheckboxProps>(Checkbox);
