class Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    this.matriz = matriz
    this.imagem = imagem
    this.x = x
    this.y = height - altura
    this.largura = largura
    this.altura = altura
    this.larguraSprite = larguraSprite
    this.alturaSprite = alturaSprite
    
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

    if(this.x < -this.largura) this.x = width 
  }

  moveY(altura) {
    this.y += altura
  }
}