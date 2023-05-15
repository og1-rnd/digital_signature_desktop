import { InputProps, TextAreaProps, PasswordProps } from 'antd/lib/input';

export type TAppInputType = 'password' | 'textArea' | 'default';

export type TAppInput = {
  type?: TAppInputType;
  isSmall?: boolean;
} & (TextAreaProps | InputProps | PasswordProps);
