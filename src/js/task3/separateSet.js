import convertJson from '../convertJsonToObj';
import bottomUpDP from './bottomUpDP';

const separateSet = (json) => {
  const entry = convertJson(json);
  const { set } = entry;
  const set1 = bottomUpDP(set);
  const indexesInSet1 = [];
  set1.forEach((item) =>
    indexesInSet1.push(set.findIndex((setItem) => setItem === item))
  );
  const set2ExcludeSet1 = [...set];
  indexesInSet1.forEach((index) => {
    delete set2ExcludeSet1[index];
  });
  const set2 = set2ExcludeSet1.filter((item) => item);
  console.log('task3: set1', set1);
  console.log('task3: set2', set2);
};

export default separateSet;
