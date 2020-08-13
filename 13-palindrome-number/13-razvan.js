// Create a function that takes a number and returns a boolean . The function will check if the given string is a palindrome or not. (if you don't know what is a palindrome google it, google the definition not the code explanation :))

// INPUT 123456
// OUTPUT false
// INPUT 123321
// OUTPUT true
// INPUT 12321
// OUTPUT true

const inp1 = 123456;
const inp2 = 123321;
const inp3 = 12321;

function palindromeString (checkStr) {
  checkStr = checkStr.toString();

  let newStr = reverseStr(checkStr);

  if(checkStr == newStr) {
    return true;
  }else{
    return false;
  }
}

function reverseStr(str) {
  let revStr = "";
  for(let i = str.length - 1 ; i >= 0 ; i--) {
    revStr += str[i];
  }
  return revStr;
}

alert(palindromeString(inp2));



