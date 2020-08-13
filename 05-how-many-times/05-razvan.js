// Create a function that recieve a sentence and a letter and find how many times that letter is in the sentence (doesn't matter if is UPPERCASE or LOWERCASE)

// INPUT: 'd', 'Daca duminica ploua, nu mai mergem la Dedeman'
// OUTPUT: 4

const sentence = 'Daca duminica ploua, nu mai mergem la Dedeman';
const letter = 'd';

howManyTimes(sentence, letter);

function howManyTimes(str, letter){
  let count = 0;
  for( let i = 0 ; i < str.length ; i++ ){
    if(str[i].toLowerCase() === letter){
      count++;
    }
  }
  alert(count);
}

