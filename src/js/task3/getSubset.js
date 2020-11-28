let result = [];

// Get all subsets of num[0..n-1] with sum 0.
const getSubsetsRecursive = (num, length, sum, arr, dp) => {
  let arrayList = [...arr];

  // If we reached end and sum is non-zero.
  if (length === 0 && sum !== 0 && dp[0][sum]) {
    arrayList.push(num[length]);
    result = arrayList.reverse();
    return;
  }

  // If sum becomes 0
  if (length === 0 && sum === 0) {
    // eslint-disable-next-line no-unused-vars
    result = arrayList;
    return;
  }

  // If given sum can be achieved after ignoring
  // current element.
  if (dp[length - 1][sum]) {
    let arrayList2 = [];
    arrayList2 = [...arrayList];
    getSubsetsRecursive(num, length - 1, sum, arrayList2, dp);
  }

  // If given sum can be achieved after considering
  // current element.
  if (sum >= num[length - 1] && dp[length - 1][sum - num[length]]) {
    arrayList.push(num[length]);
    // eslint-disable-next-line no-unused-vars
    getSubsetsRecursive(num, length - 1, sum - num[length], arrayList, dp);
  }
};

export { getSubsetsRecursive, result };
