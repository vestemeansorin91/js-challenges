
const inp = 87;

function fibonacci(num) {
  let arr = [0,1];
  let firstIndex = 0;
  let secondIndex = 1;
  while(true) {
    arr.push(arr[firstIndex] + arr[secondIndex])
    if(arr[firstIndex] > num){
      return arr[firstIndex - 1];
    }
    firstIndex ++;
    secondIndex++
  }
}

alert(fibonacci(inp));