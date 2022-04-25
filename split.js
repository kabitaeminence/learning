const str = "Form an array from this string";
const arrCopy = str.split();
console.log(arrCopy);
// expected output: ["Form an array from this string"]
const words = str.split(" ");
console.log(words);


const firstWords = str.split(' ', 3);
console.log(firstWords);

const strings = ['10', '10', '10'];
const numbers = strings.map(parseInt);

console.log(numbers);