function getMiddle(s) {
  let middleIndex = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.substring(middleIndex - 1, middleIndex + 1) : s.charAt(middleIndex);
}

// Exemplo de uso:
let s = "testing";
console.log(getMiddle(s));
