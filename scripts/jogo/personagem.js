class Personagem {
  constructor(imagem, imgLargura, imgAltura, largura, altura) {
    this.imagem = imagem
    this.imgAltura = imgAltura
    this.imgLargura = imgLargura
    this.matriz = calculaMatriz(660, 810, 16)
    this.frameAtual = 0

    this.largura = largura
    this.altura = altura
  }

  exibe() {
    image(
      this.imagem,
      0,
      height - this.altura,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.imgLargura,
      this.imgAltura
    );
  }

  anima() {
    this.frameAtual++

    if (this.frameAtual === this.matriz.length) {
      this.frameAtual = 0
    }
  }
}