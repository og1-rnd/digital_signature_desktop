import { TAppInputType } from '@ui-kit/inputs/app-input/AppInput.types';

export interface IInputContentProps {
  title: string;
  inputPlaceHolder: string;
  isMobile?: boolean;
  isShowIcon?: boolean;
  value: string;
  setValue: (text: string) => void;
  rules?: Array<string>;
  rows?: number;
  inputType?: TAppInputType;
}
