import convertJson from '../convertJsonToObj';
import getSortedResult from './sort/getSortedResult';
import getFilteredResult from './filter/getFilteredResult';
import {
  SORT_PARAM_NAME,
  INCLUDE_PARAM_NAME,
  EXCLUDE_PARAM_NAME,
} from './actionNames';

const getResult = (json) => {
  const entry = convertJson(json);
  const { data, condition: conditionsObj } = entry;
  let result = data;

  console.log('data', data);
  console.log('conditionsObj', conditionsObj);
  const conditionNames = Object.keys(conditionsObj);
  console.log('condition names', conditionNames);

  conditionNames.forEach((conditionName) => {
    if (
      conditionName === EXCLUDE_PARAM_NAME ||
      conditionName === INCLUDE_PARAM_NAME
    ) {
      const filterParam = conditionsObj[conditionName][0];
      console.log('filterParam', filterParam);
      result = getFilteredResult(result, filterParam, conditionName);
      console.log('res after filter', result);
    }
    if (conditionName === SORT_PARAM_NAME) {
      const sortParam = conditionsObj[conditionName][0];
      result = getSortedResult(result, data, sortParam);
    }
  });
  console.log('result', result);
};

export default getResult;
