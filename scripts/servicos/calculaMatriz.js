function calculaMatriz(tamanhoX, tamanhoY, qtdColunas, qtdLinhas) {
  const matriz = []

  for (let y = 0; y < tamanhoY; y += (tamanhoY / qtdLinhas)) {
    for (let x = 0; x < tamanhoX; x += (tamanhoX / qtdColunas)) {
      const linha = [parseInt(x), parseInt(y)]
      matriz.push(linha)
    }
  }

  console.log('matriz :>> ', matriz);
  return matriz
}