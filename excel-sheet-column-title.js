/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  let res = '';
  let buffer = n;
  let curLetter;

  if (n <= 26) {
    return String.fromCharCode(n + 64);
  }

  while (buffer > 26) {
    if (buffer % 26) {
      curLetter = buffer - Math.floor(buffer / 26) * 26;
      res += String.fromCharCode(curLetter + 64);
    } else {
      curLetter = buffer - 26;
      res += String.fromCharCode(curLetter + 64);
    }
    buffer = Math.floor(buffer / 26);
  }

  curLetter = buffer - Math.floor(buffer / 26) * 26;
  res += String.fromCharCode(curLetter + 64);

  return res;
};

//52/26 = 2
//52%26 = 0
//676%26 = 0
//676/26 = 26
