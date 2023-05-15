import React from 'react';
import './NumberInCircle.scss';
import { cn } from '@bem-react/classname';
import { AppText } from '@ui-kit';
import { INumberInCircleProps } from './NumberInCircle.types';

const CnNumberInCircle = cn('number-in-circle');

/**
 * @description компоненты цифры в кружке
 * @param props
 */
const NumberInCircle: React.FC<INumberInCircleProps> = (props: INumberInCircleProps) => {
  const { number, isWithoutLine } = props;
  return (
    <div className={CnNumberInCircle('container')}>
      <div className={CnNumberInCircle()}>
        <AppText fontStyle="fontBody" text={number} />
      </div>
      {!isWithoutLine && <div className={CnNumberInCircle('line')} />}
    </div>
  );
};

export default NumberInCircle;
