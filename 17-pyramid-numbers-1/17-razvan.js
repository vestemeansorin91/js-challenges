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