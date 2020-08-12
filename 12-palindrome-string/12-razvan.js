
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