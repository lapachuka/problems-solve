/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSoFar = nums[0];
  let maxEndingHere = 0;

  for (let i = 0; i < nums.length; i++) {
    maxEndingHere += nums[i];

    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray([4, -1, 2, 1]) === 6);
