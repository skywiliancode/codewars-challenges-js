function productFib(prod) {
  // Inicializa a sequência de Fibonacci com os dois primeiros números
  let fib = [0, 1];

  // Gera números da sequência de Fibonacci até que o produto dos dois últimos seja maior ou igual a 'prod'
  while (fib[fib.length - 1] * fib[fib.length - 2] < prod) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }

  // Verifica se o produto dos dois últimos números da sequência é igual a 'prod'
  if (fib[fib.length - 1] * fib[fib.length - 2] === prod) {
    // Se for igual, retorna os dois últimos números da sequência e 'true'
    return [fib[fib.length - 2], fib[fib.length - 1], true];
  } else {
    // Caso contrário, retorna os dois últimos números da sequência e 'false'
    return [fib[fib.length - 2], fib[fib.length - 1], false];
  }
}

// Exemplo de uso:
console.log(productFib(800)); // Saída: [34, 55, false]
console.log(productFib(714)); // Saída: [21, 34, true]
