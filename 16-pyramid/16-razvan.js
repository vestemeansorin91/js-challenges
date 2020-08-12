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