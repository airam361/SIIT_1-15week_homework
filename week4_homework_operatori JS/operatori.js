var a = 2;
var b = 3;
var c = 4;
var d = "2";

var sum = a + b;
console.log(`${a} + ${b} = ${sum}`);

var dif = c - b;
console.log(`${c} - ${b} = ${dif}`);

var prod = c * b;
console.log(`${c} * ${b} = ${prod}`);

var impartire = c / a;
console.log(`${c} / ${a} = ${impartire}`);

var rest = b % a;
console.log(`${b} % ${a} = ${rest}`);

var comparatie = a > b;
console.log(`Este ${a} mai mare decat ${b}? Raspuns:${comparatie}`);

comparatie = a < b;
console.log(`Este ${a} mai mic decat ${b}? Raspuns:${comparatie}`);

comparatie = a >= b;
console.log(`Este ${a} mai mare sau egal cu ${b}? Raspuns:${comparatie}`);

comparatie = a <= b;
console.log(`Este ${a} mai mic sau egal cu ${b}? Raspuns:${comparatie}`);

comparatie = d === a;
console.log(`Este '${d}' egal cu ${a}? Raspuns:${comparatie}`);

typeof d === "string" ? console.log(typeof d) : console.log("d nu este string");
