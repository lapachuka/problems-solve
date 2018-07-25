function filterNumbersFromArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(typeof arr[i] === 'number')) {
      arr.splice(i, 1);
      i--;
    }
  }
}

var arr = [1, 'a', 'b', 2, { some: '1' }, function() {}, '1', '2'];

filterNumbersFromArray(arr);
for (var i = 0; i < arr.length; i++) console.log(arr[i]);
