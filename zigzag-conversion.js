/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows <= 1) {
    return s;
  }

  let matrixString = new Array(numRows - 1);
  let jPointer = 0;
  let step = 1;
  let res = '';

  for (var i = 0; i < numRows; i++) {
    matrixString[i] = '';
  }

  for (let i = 0; i < s.length; i++) {
    matrixString[jPointer] += s[i];

    if (jPointer === 0 && step === -1) {
      step = 1;
    } else if (jPointer === numRows - 1 && step === 1) {
      step = -1;
    }

    jPointer += step;
  }

  for (let j = 0; j < numRows; j++) {
    res += matrixString[j];
  }

  return res;
};

console.log(convert('PAYPALISHIRING', 3));
console.log('PAHNAPLSIIGYIR');
