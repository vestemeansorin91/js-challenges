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