import React from 'react';
import './InputContent.scss';
import { cn } from '@bem-react/classname';
import { ReactComponent as MarkIcon } from '@assets/img/mark.svg';
import { ReactComponent as WarningIcon } from '@assets/img/warning.svg';
import { isEmptyList } from '@utils/isEmpty';
import { AppInput, AppPopover, AppText } from '@ui-kit';
import { IInputContentProps } from './InputContent.types';

const CnInputSection = cn('signing-input-section');

/**
 * @description инпут с подсказкой
 * @param props
 */
const InputContent: React.FC<IInputContentProps> = (props: IInputContentProps) => {
  const { title, isShowIcon, inputPlaceHolder, isMobile, value, setValue, rules, rows, inputType } =
    props;

  /**
   * @description подсказка для инпутов
   * @param popOverRules
   */
  const popOverContent = (popOverRules?: Array<string>) => {
    if (isEmptyList(popOverRules)) return null;

    return (
      <div className={CnInputSection('popover', { isMobile })}>
        {!isMobile && (
          <div className={CnInputSection('popover-block')}>
            <WarningIcon />
          </div>
        )}
        {popOverRules?.map((item) => (
          <div key={item} className={CnInputSection('popover-block')}>
            <AppText isSecondary={isMobile} fontStyle="footnotes" text={item} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={CnInputSection('content', { isMobile })}>
      <AppText fontStyle="fontBody" text={title} />
      {isMobile && popOverContent(rules)}
      <div className={CnInputSection('input-container')}>
        <AppPopover
          content={popOverContent(rules)}
          placement={'right'}
          open={isMobile ? false : undefined}
          isVisible={!isEmptyList(rules)}
        >
          <AppInput
            value={value}
            placeholder={inputPlaceHolder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
            rows={rows}
            type={inputType}
          />
        </AppPopover>
        {!isMobile && isShowIcon && (
          <div className={CnInputSection('input-container-icon')}>
            <MarkIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default InputContent;
