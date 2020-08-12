const input =  [1 ,16 ,2 , 22, 7];
biggestNumber(input);
function biggestNumber(arr){
  let biggest  = input[0];
  for( let i = 1 ; i < input.length ; i++ ){
    if(input[i] > biggest){
      biggest = input[i];
    }
  }
  alert(biggest);
}
 