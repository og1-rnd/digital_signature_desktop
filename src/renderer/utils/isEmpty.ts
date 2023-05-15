/**
 * @description проверяет переменную на пустоту
 * @param value
 * @param isCheckZeroInNumber - если true будет проверять число на 0 значение
 */
const isEmpty = (
  value: string | number | undefined | null,
  isCheckZeroInNumber?: boolean,
): boolean => {
  const isZero = isCheckZeroInNumber ? value === 0 : false;
  return value === null || value === undefined || value === '' || isZero;
};

/**
 * @description проверяет список на пустоту
 * @param value
 */
const isEmptyList = <T>(value?: Array<T>): boolean =>
  value === undefined || value === null || value?.length <= 0;

export { isEmpty, isEmptyList };
