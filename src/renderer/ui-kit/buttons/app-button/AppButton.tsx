import React from 'react';
import { cn } from '@bem-react/classname';
import { Button, ConfigProvider } from 'antd';

import LoaderIcon from '@assets/img/loader.svg';
import { AppText } from '@ui-kit/typography';
import { TAppButtonProps } from './AppButton.types';

import { getAppButtonTheme, getButtonLoaderColor } from './AppButton.utils';

import './AppButton.scss';

const CnAppButton = cn('app-button');

/**
 * @description AppButton
 * @param props
 */
export const AppButton: React.FC<TAppButtonProps> = (props: TAppButtonProps) => {
  const {
    type = 'primary',
    mainColor = 'blue',
    isLoading,
    size,
    text,
    disabled,
    leftElem,
    rightElem,
    onButtonClick,
  } = props;

  const theme = getAppButtonTheme(type, mainColor, disabled);

  return (
    <ConfigProvider theme={theme}>
      <Button
        prefixCls={CnAppButton()}
        className={CnAppButton({ isNoText: !text })}
        type={type}
        size={size || 'middle'}
        disabled={disabled || isLoading}
        onClick={() => onButtonClick()}
      >
        {isLoading && (
          <div className={CnAppButton(`loader rotating ${getButtonLoaderColor(mainColor, type)}`)}>
            <LoaderIcon />
          </div>
        )}
        <div className={CnAppButton('body', { isLoading })}>
          {leftElem && (
            <div className={CnAppButton('elem', { isDisabled: disabled })}>{leftElem}</div>
          )}
          {text && <AppText text={text} fontStyle="fontBody" />}
          {rightElem && (
            <div className={CnAppButton('elem', { isDisabled: disabled })}>{rightElem}</div>
          )}
        </div>
      </Button>
    </ConfigProvider>
  );
};
