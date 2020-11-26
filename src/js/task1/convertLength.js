import convertJson from './convertJsonToObj';
import extendFactors from './extendFactors';
import convertValue from './convertValue';
import factorsJson from './factors/factors';
import extraFactorsJson from './factors/extraFactors';

const convertLengthUnits = (json) => {
  const basicUnit = 'm';
  const initFactors = new Map(Object.entries(JSON.parse(factorsJson)));
  let factors = initFactors;

  if (extraFactorsJson) {
    const extraFactors = new Map(Object.entries(JSON.parse(extraFactorsJson)));
    factors = extendFactors(initFactors, extraFactors);
  }

  const entry = convertJson(json);
  const {
    distance: { unit, value },
  } = entry;
  const { convert_to: to } = entry;

  const result = {
    unit: to,
    value: convertValue(basicUnit, unit, to, value, factors),
  };
  return JSON.stringify(result);
};
export default convertLengthUnits;
