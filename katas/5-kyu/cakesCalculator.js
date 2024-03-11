function cakes(recipe, available) {
  let maxCakes = Infinity; // Inicializa maxCakes com um número grande

  // Itera sobre cada ingrediente na receita
  for (let ingredient in recipe) {
    // Verifica se o objeto de ingredientes disponíveis contém o ingrediente atual
    if (available.hasOwnProperty(ingredient)) {
      // Calcula o número máximo de bolos com base na quantidade disponível do ingrediente
      const maxCakesForIngredient = Math.floor(available[ingredient] / recipe[ingredient]);
      // Atualiza maxCakes para o mínimo entre maxCakes e maxCakesForIngredient
      maxCakes = Math.min(maxCakes, maxCakesForIngredient);
    } else {
      // Se o ingrediente estiver faltando, Pete não pode assar nenhum bolo
      return 0;
    }
  }

  return maxCakes; // Retorna o número máximo de bolos que Pete pode assar
}

// Test cases
console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 })); // Saída: 2
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 })); // Saída: 0
