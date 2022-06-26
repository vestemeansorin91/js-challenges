// You recieve the length of the array you are about to create and the value to fill those spaces number , string

// INPUT: 6, 'z'
// OUTPUT ['z','z','z','z','z','z',]

const arrLength = 6;
const element = 'z';
let newArr = [];

createArray(arrLength, element);
function createArray(arrLength, element){
  for( let i = 0 ; i < arrLength ; i++ ){
    newArr.push(element);
  }
  alert(newArr);
}

