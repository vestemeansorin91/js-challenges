// Create a function that takes a number and returns a number . You will display the last fibonacci number that is equal or less than provided number.

// INPUT 87
// OUTPUT 55

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


