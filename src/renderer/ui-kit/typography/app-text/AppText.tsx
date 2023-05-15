import React from 'react';
import { Typography } from 'antd';

import { cn } from '@bem-react/classname';
import { TAppText } from './AppTextTypes';

import './style.scss';

const { Text } = Typography;
const CnAppText = cn('app-text');

/**
 * @description AppText
 * @param props
 */
export const AppText: React.FC<TAppText> = (props: TAppText) => {
  const {
    textStyle = 'default',
    fontStyle = 'default',
    text,
    isBold,
    isSecondary,
    isAdaptive,
    ...otherProps
  } = props;
  const classNameString = `${textStyle.toString()} ${fontStyle.toString()} ${
    isAdaptive ? `${fontStyle}_isAdaptive` : ''
  }`;

  return (
    <Text
      prefixCls={CnAppText({ isBold, isSecondary })}
      className={classNameString}
      {...otherProps}
    >
      {text}
    </Text>
  );
};
