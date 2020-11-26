import { INCLUDE_PARAM_NAME, EXCLUDE_PARAM_NAME } from '../actionNames';

const getFilteredResult = (data, filterParam, conditionName) => {
  const [filterKey] = Object.keys(filterParam);
  const [filterValue] = Object.values(filterParam);
  console.log('filterKey', filterKey);
  console.log('filterValue', filterValue);
  let result = null;
  if (conditionName === EXCLUDE_PARAM_NAME) {
    result = data.filter((obj) => obj[filterKey] !== filterValue);
  }
  if (conditionName === INCLUDE_PARAM_NAME) {
    result = data.filter((obj) => obj[filterKey] === filterValue);
  }
  console.log('res', result);
  return result;
};

export default getFilteredResult;
