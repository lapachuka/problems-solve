/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romanHash = {
    1: 'I',
    4: 'IV',
    5: 'V',
    9: 'IX',
    10: 'X',
    40: 'XL',
    50: 'L',
    90: 'XC',
    100: 'C',
    400: 'CD',
    500: 'D',
    900: 'CM',
    1000: 'M'
  };

  let numStr = num.toString();
  let result = '';

  for (let i = 0; i < numStr.length; i--) {
    if (numStr[i] !== '0') {
      if(romanHash[numStr[i] * i]){
        result += romanHash[numStr[i] * Math.pow(10,i)]
      }else{

      }
  }

  return result;
};

function getCurrentNumber(one, five, ten, number) {
  const currentNumberHash = {
    2: one + one,
    3: one + one + one,
    4: one + five,
    6: five + one,
    7: five + one + one,
    8: five + one + one + one
  };

  return currentNumberHash[number];
}
