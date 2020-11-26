import convertToBasicUnit from './convertToBasicUnit';
import roundToDigits from './roundToDigits';
import convertToUnit from './convertToUnit';

const convertValue = (basicUnit, unit, to, value, factors) => {
  if (to === basicUnit) {
    const res = convertToBasicUnit(value, unit);
    return roundToDigits(res);
  }
  if (unit === basicUnit) {
    const res = convertToUnit(value, factors.get(to));
    return roundToDigits(res);
  }
  const basic = convertToBasicUnit(value, factors.get(unit));
  const res = convertToUnit(basic, factors.get(to));
  return roundToDigits(res);
};

export default convertValue;
