// Create a function that takes a number and returns in console a pyramid . The number you provide are the number of levels from pyramid (ignore the underlines, i can't put spaces in this text area)

// INPUT
// 3

// OUTPUT
// __1__ _123_ 12345

// INPUT
// 7

// OUTPUT
// _______1_______ ______123______ _____12345_____ ____1234567____ ___123456789___ __12345678901__ _1234567890123_ 123456789012345

const inp = 7;

function pyramid(levels) {
  
  let linesNumber = levels- 1;
  let level = "";
  const line = " ";
  let nr = "";
  let nrToAdd =1;

  for(let i = 1 ; i < levels; i++) {

    nr += nrToAdd.toString(); //construieste partea din stanga
    level = line.repeat(linesNumber) + nr + line.repeat(linesNumber);
    nrToAdd ++; 
    nr += nrToAdd.toString(); // construieste partea din dreapta
    nrToAdd ++;

    if(nrToAdd === 9){
      nrToAdd = 0;
    }

    linesNumber --; // scade in mod egal numarul de spatii
    console.log(level);
  }
}

pyramid(inp);


