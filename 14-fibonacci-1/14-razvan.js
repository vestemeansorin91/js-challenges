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
