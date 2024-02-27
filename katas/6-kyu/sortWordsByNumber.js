let words = "4of Fo1r pe6ople g3ood th5e the2";

function order(words) {
  // Dividindo a string em uma lista de palavras
  let wordsList = words.split(" ");

  // Array para armazenar as palavras na ordem correta
  let newArray = [];

  // Iterando sobre cada palavra na lista
  for (let i = 0; i < wordsList.length; i++) {
    // Encontrando o número presente na palavra
    let num = wordsList[i].match(/\d+/);
    // Verificando se o número foi encontrado
    if (num) {
      // Convertendo o número para índice
      let index = parseInt(num[0]) - 1;
      // Armazenando a palavra no índice correto do novo array
      newArray[index] = wordsList[i];
    }
  }
  // Unindo as palavras no novo array em uma única string e retornando
  return newArray.join(' ');
}

console.log(order(words));
