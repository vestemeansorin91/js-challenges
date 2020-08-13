// 1 ODD OR EVEN
// Create a function that takes a number and returns a string that says if the given number is 'odd' or 'even'

// INPUT 19
// OUTPUT 'odd'

const numarPar = "42";


function oddOrEven(input) {
  let result = input % 2 === 0 ? 'odd' : 'even'
  return result;
}

const answer1 = oddOrEven(numarPar);
const answer2 = oddOrEven(numarPar + 1);

console.log(answer1);
console.log(answer2);