/**
 * Given two strings A and B of lowercase letters, return true if and only
 *  if we can swap two letters in A so that the result equals B.
 */

/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  let counter = 0;
  const hash = {};

  if (A.length !== B.length) {
    return false;
  }

  if (A === B) {
    let uniqueElements = [];
    for (let i = 0; i < A.length; i++) {
      if (uniqueElements.includes(A[i])) {
        return true;
      } else {
        uniqueElements.push(A[i]);
      }
    }
    return false;
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (counter) {
        if (hash[B[i]] !== A[i]) {
          return false;
        }
      } else {
        hash[A[i]] = B[i];
      }
      counter++;
    }

    if (counter > 2) {
      return false;
    }
  }

  return counter === 2;
};
