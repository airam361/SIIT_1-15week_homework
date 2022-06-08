function consecutive(number) {
  for (var i = 1; i <= number; i++) {
    console.log(i);
  }
}
consecutive(20);

function odd(number) {
  for (var i = 1; i <= number; i += 2) {
    console.log(i);
  }
}
// odd(20);

function arrSum(arr) {
  var sum = 0;
  arr.forEach((item) => (sum += item));
  console.log(sum);
}
arr = [1, 2, 3, 4];
// arrSum(arr);

var maxArr = Math.max(...arr);
// console.log(maxArr);

function elemInArray(number, array) {
  var filteredArray = array.filter((item) => item === number);
  console.log(filteredArray.length);
}
// elemInArray(2, [1, 2, 5, 2, 3, 2, 2]);
