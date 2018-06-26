/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  let isFirstBadVerison = false;
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    let res = 0;
    let start = 1;
    let end = n;

    if (isBadVersion(start)) {
      return start;
    }

    if (!isBadVersion(end)) {
      return false;
    }

    while (!isFirstBadVerison) {
      res = Math.round((start + end) / 2);

      if (isBadVersion(res)) {
        end = res;
      } else {
        start = res;
      }

      if (isBadVersion(start)) {
        return start;
        isFirstBadVerison = true;
      }

      if (isBadVersion(res) && !isBadVersion(res - 1)) {
        return res;
        isFirstBadVerison = true;
      }
    }
  };
};

function isBadVersion(n) {
  if (n === 0) {
    return true;
  }
  return false;
}

console.log(solution(isBadVersion)(15));
