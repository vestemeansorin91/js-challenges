const inpString = 'romania';
let reverseString = '';

revStr(inpString);

function revStr(inpString) {
  for(let i = inpString.length - 1 ; i >= 0 ; i--){
    reverseString += inpString[i];
  }
  alert(reverseString);
}
