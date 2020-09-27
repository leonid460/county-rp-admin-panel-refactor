import { PopUpColorPicker } from 'ui-kit/organisms';
import { withLabel } from 'ui-kit/atoms';
import { IPopUpColorPickerProps } from 'ui-kit/organisms/PopUpColorPicker/types';

export const PopUpColorPickerWithLabel = withLabel<IPopUpColorPickerProps>(PopUpColorPicker);
