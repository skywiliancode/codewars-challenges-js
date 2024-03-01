var maxSequence = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  let max_current = arr[0];
  let max_global = arr[0];

  for (let i = 1; i < arr.length; i++) {
    max_current = Math.max(arr[i], max_current + arr[i]);
    max_global = Math.max(max_global, max_current);
  }

  return Math.max(0, max_global);
}

// Exemplo de uso:
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Saída: 6
