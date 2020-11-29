import convertJson from '../convertJsonToObj';
import bottomUpDP from './bottomUpDP';

const separateSet = (json) => {
  const entry = convertJson(json);
  const { set } = entry;

  if (set.length < 2) {
    return console.log('The initial array is empty or contains only one value');
  }

  const set1 = bottomUpDP(set);
  const setClone = [...set];
  set1.forEach((value) => {
    const index = setClone.indexOf(value);
    delete setClone[index];
  });
  console.log('set', set);
  console.log('set1', set1);
  // in case set contains zeros condition item === 0
  const set2 = setClone.filter((item) => item || item === 0);
  console.log('set2', set2);
};

export default separateSet;
