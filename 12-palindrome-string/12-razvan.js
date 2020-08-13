// Create a function that takes a string and returns a boolean . The function will check if the given string is a palindrome or not. The function will make sure camel case is allowed (if you don't know what is a palindrome google it, google the definition not the code explanation :))

// INPUT 'Awesome'
// OUTPUT false
// INPUT 'My gym'
// OUTPUT true

const inp1 = 'Awesome';
const inp2 = 'My gym';

function palindromeString (checkStr) {
  checkStr = checkStr.toLowerCase();
  
  checkStr = checkStr.split(' ');
  checkStr = checkStr.join('');

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

alert(palindromeString(inp1));


