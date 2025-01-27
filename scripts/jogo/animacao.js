class Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz
    this.imagem = imagem
    this.x = x
    this.variacaoY = variacaoY
    this.y = height - altura
    this.largura = largura
    this.altura = altura
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite

    this.yInicial = height - this.altura - variacaoY
    this.y = this.yInicial
    
    this.frameAtual = 0
  }

  exibe() {
    image(
      this.imagem,
      this.x,
      this.y,
      this.largura,
      this.altura,
      this.matriz[this.frameAtual][0],
      this.matriz[this.frameAtual][1],
      this.larguraSprite,
      this.alturaSprite
    );

    this.anima()
  }

  anima() {
    if(++this.frameAtual === this.matriz.length) this.frameAtual = 0  
  }

  moveX(velocidade) {
    this.x -= velocidade
  }

  moveY(altura) {
    this.y += altura
  }

  aparece() {
    this.x = width
  }
}