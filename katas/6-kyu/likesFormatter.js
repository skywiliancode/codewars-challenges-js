let names = ["Alex", "Jacob", "Mark", "Max", "Gustavo"]

function likes(names) {
  // Verifica se há nomes na lista
  if (names.length === 0) {
    return "no one likes this";
  }

  // Casos para diferentes quantidades de nomes
  switch (names.length) {
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

console.log(likes(names))
