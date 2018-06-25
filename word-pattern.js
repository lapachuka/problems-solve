/* Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in
 pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const hashPattern = {};
  const strHash = {};
  const uniqueKeys = [];

  str = str.split(' ');

  if (pattern.length !== str.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (strHash[str[i]]) {
      if (strHash[str[i]] !== pattern[i]) {
        return false;
      }
    } else {
      strHash[str[i]] = pattern[i];
    }

    if (hashPattern[pattern[i]]) {
      if (hashPattern[pattern[i]] !== str[i]) {
        return false;
      }
    } else {
      hashPattern[pattern[i]] = str[i];
    }
  }

  return true;
};

console.log(wordPattern('aabc', 'dog dog cat bag'));
