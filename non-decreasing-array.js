/**
 * Given an array with n integers, your task is to check if it could become 
 * non-decreasing by modifying at most 1 element.

  We define an array is non-decreasing if array[i] <= array[i + 1] 
  holds for every i (1 <= i < n).

Example 1:
Input: [4,2,3]
Output: True
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:
Input: [4,2,1]
Output: False
Explanation: You can't get a non-decreasing array by modify at most one element.
Note: The n belongs to [1, 10,000].
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  let counter = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue;
    } else {
      counter++;
      console.log(nums);
      if (counter > 1) {
        return false;
      }

      if (i === nums.length - 2 && counter == 0) {
        return true;
      }

      if (nums[i] <= nums[i + 2] || !nums[i + 2]) {
        nums.splice(i + 1, 1);
      } else {
        nums.splice(i, 1);
      }
      i = -1;
    }
  }
  return true;
};

/* console.log(checkPossibility([4, 2, 1])); //false
console.log(checkPossibility([4, 2, 3])); //true
console.log(checkPossibility([-1, 4, 2, 3])); //true
console.log(checkPossibility([2, 3, 3, 2, 4])); //true
console.log(checkPossibility([1, 2, 3, 1, 2, 3])); //false */
console.log(checkPossibility([1, 2, 4, 5, 3])); //true
