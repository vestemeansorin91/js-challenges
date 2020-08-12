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
