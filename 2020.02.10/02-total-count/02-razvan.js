// Create a function that will take anarrayof numbers and will return anumber (the total)

// INPUT [5 ,12 , 18 , 10]
// OUTPUT 45

let total = 0;
const input = [5 ,12 , 18 , 10];
for( let i = 0 ; i < input.length ; i++ ){
  total += input[i];
}
