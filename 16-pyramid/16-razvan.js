// Create a function that takes a number and returns in console a pyramid . The number you provide are the number of levels from pyramid (ignore the underlines, i can't put spaces in this text area) and the pyramid should be built with # symbol

// INPUT
// 3

// OUTPUT
// __#__ _###_ #####

// INPUT
// 7

// OUTPUT
// _______#_______ ______###______ _____#####_____ ____#######____ ___#########___ __###########__ _#############_ ###############


const inp = 7;

function pyramid(levels) {
  
  let linesNumber = (levels / 2) - 1;
  let level = "";
  const line = " ";
  const symbol = "#";

  for(let i = 1 ; i < levels; i += 2) {
    level = line.repeat(linesNumber) + symbol.repeat(i) + line.repeat(linesNumber);
    linesNumber --;
    console.log(level);
  }
}

pyramid(inp * 2);



