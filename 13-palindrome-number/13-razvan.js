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