/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  const numbers = new Array(n.length);
  let counter = 0;

  for (let i = 2; i < n; i++) {
    if (numbers[i]) {
      continue;
    }
    counter++;
    for (let j = i; j < n; j = i + j) {
      numbers[j] = true;
    }
  }

  return counter;
};

console.log(countPrimes(499999));
