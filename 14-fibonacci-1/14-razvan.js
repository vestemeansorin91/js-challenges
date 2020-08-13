// Create a function that takes a number and returns a string . You will display the number of elements from fibonacci sequence that you get from user

// INPUT 9
// OUTPUT '0 1 1 2 3 5 8 13 21'

const inp = 9;

function fibonacci(dim) {
  let arr = [0,1];
  let firstIndex = 0;
  let secondIndex = 1;
  for(let r = 0; r < dim - 2 ; r ++) {
    arr.push(arr[firstIndex]+arr[secondIndex])
    firstIndex ++;
    secondIndex++
  }
  return arr;
}

alert(fibonacci(inp));



