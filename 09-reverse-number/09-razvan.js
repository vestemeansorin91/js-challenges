// Create a function that takes a number and reverse it. (it should return a number not a string)

// INPUT 123
// OUTPUT 321

const inp = 123;
let inpStr = inp.toString();
let revNumber = '';
let revInt;

function reverseNumber(inpNumber) {
  for(let i = inpNumber.length - 1 ; i >= 0 ; i--) {
    revNumber += inpNumber[i];
  }
  return parseInt(revNumber);
}

revInt = reverseNumber(inpStr);
alert(typeof(revInt));
alert(revInt)
