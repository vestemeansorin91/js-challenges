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