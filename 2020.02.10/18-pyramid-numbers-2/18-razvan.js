// Create a function that takes a number and returns in console a pyramid . The number you provide are the number of levels from pyramid (ignore the underlines, i can't put spaces in this text area)

// INPUT
// 3

// OUTPUT
// __1__ _234_ 56789

// INPUT
// 7

// OUTPUT
// _______1_______ ______234______ _____56789_____ ____0123456____ ___789012345___ __67890123456__ _7890123456789_ 012345678901234

const inp = 7;

function pyramid(levels) {
  
  let linesNumber = levels - 1;
  let level = "";
  const line = " ";
  let number = "";
  for(let i = 0 ; i < levels; i ++) {
    if(i === 0){
      number = "1"
      start = 2;
    }else{
      number = constructNumbers ((i+1) *2,start);
      start = number[1];
      
    }
    level = line.repeat(linesNumber) + number[0] + line.repeat(linesNumber);
    
    linesNumber --; // scade in mod egal numarul de spatii
    console.log(level);
  }
}

function constructNumbers(nrOfElements,start) {
  let nr = "";
  let countElement = 1;
  let nrToAdd = start;
  while(true) {
    if(countElement === nrOfElements) {
      break
    }
    if(nrToAdd === 10) {
      nrToAdd = 0;
    }
    nr += nrToAdd.toString();
    nrToAdd++;
    countElement ++;
 }
  return [nr, nrToAdd];
}

 pyramid(inp);



