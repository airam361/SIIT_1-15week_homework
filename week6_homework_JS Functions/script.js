// Question 1
// 1. local
// 2. yes
// 3. console prints:  Aloha!

// Question 2
// 1. global
// 2. yes
// 3. console prints:  5

// Question 3
// 1. local
// 2. out of scope
// 3. no
// 4. console prints:  snap pea
// 5. error vegetable not defined

// Question 4
// 1. local
// 2. global
// 3. console prints:  Superman
// 4. console prints:  Batman
// 5. no

// Question 5
// 1. global
// 2. console prints:  beep
// 3. function declaration
// 4. error makeNoise is not a function
// 5. console prints:  beep
// 6. console prints:  beep 2 times
// 7. console prints:  beep 2 times

// Question 6

var sumOfNums = function (numsArray) {
  // Your Code Here
  if (numsArray.length === 0) {
    return 0;
  } else {
    return numsArray.reduce((prev, curr) => prev + curr, 0);
  }
};

// Question 7

var numsGreaterThanTen = function (numsArray) {
  // Your Code Here
  return numsArray.filter((item) => item > 10);
};

// Question 8

// var allStartingWithA = function (words) {
//   // Your Code Here
//   if (words.length === 0) {
//     return true;
//   } else {
//     let wordsWithA = words.filter(
//       (item) => item.startsWith("a") || item.startsWith("A")
//     );
//     if (words.length === wordsWithA.length) {
//       return true;
//     } else return false;
//   }
// };

var allStartingWithA = function (words) {
  // Your Code Here
  if (words.length === 0) {
    return true;
  } else {
    let wordsWithNoA = words.some(
      (item) => !(item.startsWith("a") || item.startsWith("A"))
    );
    if (wordsWithNoA) {
      return false;
    } else return true;
  }
};

// Question 9
var hasAtLeastNVowels = function (word, n) {
  // Your Code Here
  let regex = /[a,e,i,o,u]/g;
  if (n < 0) {
    return null;
  } else {
    if (word.toLowerCase().match(regex).length >= n) {
      return true;
    } else return false;
  }
};

// Question 10
var buildObjectFromWords = function (words) {
  // Your Code Here
  let obj = {};
  words.forEach((item) => (obj[item] = item.length));
  return obj;
};

let obj = {
  "cat": 3,
  'horse': 5,
  elephant: 8,
  "elefantul-meu": 9
};



/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums, //6
  numsGreaterThanTen: numsGreaterThanTen, //7
  allStartingWithA: allStartingWithA, //8
  hasAtLeastNVowels: hasAtLeastNVowels, //9
  buildObjectFromWords: buildObjectFromWords, //10
};
