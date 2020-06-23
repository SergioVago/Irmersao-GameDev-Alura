function calculaMatriz(tamanhoX, tamanhoY, qtdSprites) {
  const matriz = []

  for (let j = 0; j <= tamanhoY; j += (tamanhoY / (Math.sqrt(qtdSprites) - 1))) {
    for (let i = 0; i <= tamanhoX; i += (tamanhoX / (Math.sqrt(qtdSprites) -1 ))) {
      const linha = [i, j]
      matriz.push(linha)
    }
  }

  console.log('matriz :>> ', matriz);
  return matriz
}