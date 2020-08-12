const inp = 4;
let arr = [];

function ladderNumbers(num) {
  let times = 0;
  let newNum;
  for(let i = 1 ; i < num + 1 ; i++) {
    newNum = i.toString();
    for(let j = 0 ; j < times ; j++) {
      newNum += i.toString();
    }
    for(let k = 0 ; k < times +1 ; k++) {
         arr.push(newNum);
    }
    times ++;
  }
  console.log(arr.join(' '));
}

ladderNumbers(inp);