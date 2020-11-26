import sortObjsByNumber from './sortObjsByNumber';
import sortObjsByStr from './sortObjsByStr';

const getSortedResult = (result, data, sortParam) => {
  console.log('sortParam', sortParam);
  const sortParamType = typeof data[0][sortParam];
  console.log('sortParamType', sortParamType);

  if (sortParamType === 'number') {
    return sortObjsByNumber(result, sortParam);
  }
  return sortObjsByStr(result, sortParam);
};

export default getSortedResult;
