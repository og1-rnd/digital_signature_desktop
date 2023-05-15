import React from 'react';
import { cn } from '@bem-react/classname';
import { Popover } from 'antd';

import { IAppPopoverProps } from './AppPopover.types';

import './style.scss';

const CnAppPopover = cn('app-popover');
/**
 * @description AppPopover
 * @param props
 */
const AppPopover: React.FC<IAppPopoverProps> = (props: IAppPopoverProps) => {
  const { isVisible, children } = props;
  if (!isVisible && children) return <>{children}</>;
  return <Popover prefixCls={CnAppPopover()} {...props} />;
};

export default AppPopover;
