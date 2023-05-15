import { ThemeConfig } from 'antd/lib/config-provider/context';

import { TAppButtonColor, TAppButton } from './AppButton.types';

/**
 * @description получаем цвет кнопки
 * @param color
 */
const getButtonColor = (color: TAppButtonColor): string => {
  switch (color) {
    case 'red':
      return '#EA5959';
    case 'grey':
      return '#C0C2C9';
    default:
      return '#0088E9';
  }
};

export const getButtonLoaderColor = (color: TAppButtonColor, type: TAppButton): string =>
  type === 'primary' ? 'white' : color;

/**
 * @description получаем стили кнопки в зависимости от типа
 * @param type
 * @param mainColor
 * @param disabled
 */
export const getAppButtonTheme = (
  type: TAppButton,
  mainColor: TAppButtonColor,
  disabled?: boolean,
): ThemeConfig => {
  const color = getButtonColor(disabled ? 'grey' : mainColor);
  const colorPrimary = color;
  const colorBorder = type === 'dashed' ? undefined : color;
  const colorText = type === 'primary' ? '#FFFFFF' : color;
  const colorBgContainerDisabled = type === 'primary' ? color : 'transparent';
  return {
    token: {
      colorPrimary,
      colorBorder,
      colorBgContainerDisabled,
      colorText,
    },
  };
};
