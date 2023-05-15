import { ReactNode } from 'react';

export type TAppButton = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';
export type TAppButtonSize = 'large' | 'middle' | 'small';
export type TAppButtonColor = 'blue' | 'red' | 'grey';

export type TAppButtonProps = {
  type?: TAppButton;
  size?: TAppButtonSize;
  text?: string;
  disabled?: boolean;
  isLoading?: boolean;
  leftElem?: ReactNode;
  rightElem?: ReactNode;
  onButtonClick: () => void;
  mainColor?: TAppButtonColor;
  className?: string;
};
