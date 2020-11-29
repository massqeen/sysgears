import { getSubsetsRecursive, result } from './getSubset';

// bottom up DP
// dp[i][s] will be ‘true’ if we can make sum ‘s’ from the first ‘i’ numbers.
let bottomUpDP = function (num) {
  const n = num.length;
  // find the total sum
  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    sum += num[i];
  }

  // we are trying to find a subset of given numbers that has a total sum of ‘sum/2’.
  sum = Math.floor(sum / 2);

  const dp = Array(n)
    .fill(false)
    .map(() => Array(sum + 1).fill(false));

  // populate the sum=0 column, as we can always have '0' sum without including any element
  for (let i = 0; i < n; i += 1) {
    dp[i][0] = true;
  }

  // with only one number, we can form a subset only when the required sum is equal to its value
  for (let s = 1; s <= sum; s += 1) {
    dp[0][s] = num[0] === s;
  }

  // process all subsets for all sums
  for (let i = 1; i < n; i += 1) {
    for (let s = 1; s <= sum; s += 1) {
      // if we can get the sum 's' without the number at index 'i'
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s];
      } else if (s >= num[i]) {
        // else if we can find a subset to get the remaining sum
        dp[i][s] = dp[i - 1][s - num[i]];
      }
    }
  }

  // the bottom-right corner will have our answer.

  const arr = [];
  getSubsetsRecursive(num, n - 1, sum, arr, dp);
  // in case of even sum but no solutions [5,7,7,3,10]
  if (!result.length) {
    getSubsetsRecursive(num, n - 1, sum - 1, arr, dp);
    // still no solution [1,2,3,100]
    if (!result.length) {
      return [Math.max(...num)];
    }
  }
  return result;
};

export default bottomUpDP;
