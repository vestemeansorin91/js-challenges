// Create a function that takes a string and returns it like in the example below.

// INPUT 'Cea mai frumoasa zi'
// OUTPUT 'CeA MaI FrUmOaSa Zi'

const inputStr = 'Cea mai frumoasa zi'
let newStr = '';

crazySentence(inputStr);
function crazySentence(inpStr) {

  inpStr = inpStr.toLowerCase();
  const arr = inpStr.split(" ");
  
  for(let i = 0 ; i < arr.length ; i++) {
    let count = 1;
    for(let y = 0 ; y < arr[i].length; y ++) {
      if(count % 2 === 0) {
        newStr += arr[i][y];
      } else {
        newStr += arr[i][y].toUpperCase();
      }
      count++;
    }
    newStr += " ";
  }
  alert(newStr);
}
