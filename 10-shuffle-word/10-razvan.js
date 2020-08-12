const inp = 'create';
let inpArr = inp.split("");
let index1 = 0;
let index2 = 0;

function shuffleWord(word) {
  for(let i = 0 ; i < word.length ; i++) {
    index1 = parseInt(Math.random()*word.length);
    index2 = parseInt(Math.random()*word.length);
    if(index1 < word.length - 1) {
      if(index1 + 1 !== index2) {
        index1 ++;
      }
    }
    [word[index1], word[index2]] = [word[index2], word[index1]];
  }  
  alert(word);
}

shuffleWord(inpArr);
