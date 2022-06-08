---
title: JS Functions
type: homework
competencies: JS basics
creator:
    cohort: WDIR-Matey
    adapted by: Christine Yi for WDIR
---

[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Fun Fun Functions!
![image](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Function_machine2.svg/220px-Function_machine2.svg.png)

Javascript functions are essential in developing **functionality** (who knew?) in our programs, but sometimes there's some funky behavior, and it doesn't do what we might expect it to do, especially when it comes to [variable scope](https://www.sitepoint.com/demystifying-javascript-variable-scope-hoisting/). In tonight's assignment, you will start by exploring local and global scope in Javascript and see how being able to access variables depends on the scope. You'll round off your knowledge by writing some functions and use [Mocha tests](https://mochajs.org/) to check your work.

The general guideline with variable scope is:

 - Any variable declared **outside** a function belongs to the **global** scope.
 - **Global** variables are accessible anywhere in your code.
 - Each function has its own scope.
 - Variables declared in those functions are **local**, meaning it's accessible only inside that function and any nested functions.
 - The newest version of Javascript (ES6) offers [block scoping](https://www.sitepoint.com/joys-block-scoping-es6/) which we won't be using here.


## Exercise Objectives
* Gain deeper insight to local and global scope.
* Practice writing functions that take 1 - 2 arguments.
* Use tests to test your work.

## Setup

`cd` into today's homework directory, and run `npm install` in terminal -- this will download any assignment-specific JavaScript dependencies into to a directory called `node_modules`.

## Tests Setup

There are automated tests built into this assignment so that you can check your work. You can run these tests by running `npm test` in terminal in the `homework` directory. Ideally, you should run the tests after each problem. Only the Questions 6 - 10 have tests provided for you.

## Instructions

* Write your answers in `script.js`.
* For Questions 1 - 5:
  * fill in the blank with either `local` or `global` or `out of scope`.
  * These are (super) short answer questions.
  * Feel free to run the code in `script.js` or in a [repl.it session](https://repl.it/languages/javascript), or in your browser console.
* For Questions 6 - 10:
  * don't modify the variable names, since the tests use them.
  * run `npm test` in a separate terminal tab after each problem and get them all to pass.


#### Question 1
1. The variable `greeting` is `______` to the `sayGreeting` function.
2. Can the function access `greeting`?
3. What happens when you invoke `sayGreeting`?
4. :dart: Commit -m "Question 1 done"

```
var sayGreeting = function() {
	var greeting = "Aloha!";
  console.log(greeting);
}
```

#### Question 2
1. The variable `number` is `_______` to the `addition` function.
2. Can the function access `number`?
3. What happens when you invoke `addition`?
4. :dart: Commit -m "Question 2 done"

```
var number = 5;

var addition = function() {
	console.log(number)
}
```

##### Question 3

1. The variable `vegetable` is `_______` to the `firstFunction` function.
2. The variable `vegetable` is `_______` to the `second Function` function.
3. Can the `secondFunction` access `vegetable`?
4. What happens when you invoke `firstFunction`?
5. What happens when you invoke `secondFunction`?
6. :dart: Commit -m "Question 3 done"

```
var firstFunction = function() {
	var vegetable = "snap pea";
	console.log(vegetable);
}

var secondFunction = function() {
	console.log(vegetable);
}
```

##### Question 4

1. The variable `superhero` is `_______` to the `fightSuperman` function.
2. The variable `superhero` is `_______` to the `theRealHero` function.
3. What happens when you invoke `fightSuperman`?
4. What happens when you invoke `theRealHero`?
5. Does `theRealHero` have access to `superhero` inside `fightSuperman`?
4. :dart: Commit -m "Question 4 done"

```
var superhero = "Batman";

var fightSuperman = function() {
	var superhero = "Superman";
	console.log(superhero);
}

var theRealHero = function() {
	console.log(superhero);
}
```

##### Question 5

1. The variable `beep` is in `_______` scope.
2. What happens when you execute the code below?
4. Is `makeNoise` a function declaration or function expression?
5. Change the syntax for `makeNoise` so that it's a function expression. What happens when you execute the code?
3. What happens if you move `makeNoise()` **after** the function expression?
4. What happens if you `console.log(beep)` below this revised code?
4. Go back to the original code. What happens if you throw a `console.log(beep)` after the function? How is this possible? (This is why we'll be mostly sticking to function expressions.)
4. :dart: Commit -m "Question 5 done"

```
makeNoise();

function makeNoise(){
  beep = "beep";
  console.log(beep);
}
```

##### Question 6

Build upon the `sumOfNums` function so that:
  - it takes an array of numbers
  - it outputs the sum of numbers that were passed in
  - Edge case: if the array is empty, it returns 0
  - :dart: Commit -m "Question 6 test passed"

##### Question 7

Build upon the `numsGreaterThanTen` function so that:
  - it takes an array of numbers
  - it outputs an array of the numbers from the first array that are strictly greater (i.e. greater than but not equal to) than 10
  - :dart: Commit -m "Question 7 test passed"

##### Question 8

Build upon the `allStartingWithA` function so that:
  - it takes an array of words
  - it outputs true if ALL words start with the letter 'a' (case-insensitive), and `false` otherwise.
  - Edge Case: If the array is empty, the function should return `true`.
  - :dart: Commit -m "Question 8 test passed"


##### Question 9
Build upon the `hasAtLeastNVowels` function so that:
  - it takes 2 parameters: a single word, and a number (`n`)
  - it outputs `true` if the word has at least some number (`n`) of vowels, `false` otherwise
  - Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
  - Edge Case: If `n` is less than zero, return `null`.
  - :dart: Commit -m "Question 9 test passed"


##### Question 10

Build upon the `buildObjectFromWords` function so that:
  - it takes an array of words
  - it outputs an object `{}` where each word in the array is a key, and the value tied to that key is the length of the word
  - e.g. given `['cat', 'horse', 'elephant']`, return `{ cat: 3, horse: 5, elephant: 8}`
  - :dart: Commit -m "Question 10 test passed"

## Reach Goal

We'll be writing a ton more functions during the course, and it never hurts to practice more and feel super cozy about functions. One really great resource we'll be using in class is [Code Wars](http://www.codewars.com), a great training grounds for coding challenges for basically every programming language!

1. Sign up on [Code Wars](https://www.codewars.com/trainer/setup)
2. For "Programming experience", select `Learning to Program`
3. For "Choose a language", select `JavaScript`

Try your hand at one (or all) of these challenges:
1. [Bronze status](https://www.codewars.com/kata/simple-fun-number-181-rounding/train/javascript)
2. [Silver status](https://www.codewars.com/kata/the-maximum-and-minimum-difference-simple-version)
3. [Gold status](https://www.codewars.com/kata/all-star-code-challenge-number-22)
4. [Plat challenge](https://www.codewars.com/kata/halloween-sweets)


## Submitting Your Work

  When you're ready, create an issue on the class repo with
  a title in the format "First and Last Name -- Week XX Day XX".
  The issue body should have:

  *   A link to your forked repo (ie. to your `homework` folder)
  *   A 'comfort' score on how you feel about your answers, from 1 (very
      uncomfortable) to 5 (very comfortable)
  *   A 'completeness' score, from 1 (didn't do it) to 5 (finished all of it)    
  *   A 'win'
  *   A 'struggle'
  *   A 'comment'
  *   A screen shot of your tests.
