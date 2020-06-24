class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
  ) {
    super(
      matriz,
      imagem,
      x,
      largura,
      altura,
      larguraSprite,
      alturaSprite,
    )

    this.yInicial = height - this.altura
    this.y = this.yInicial

    this.velocidadeDoPulo = 0
    this.gravide = 3
    this.pulos = 0
  }

  pula() {
    if(++this.pulos <= 2) {
      this.velocidadeDoPulo = -30
    }
  }

  aplicaGravidade() {
    this.moveY(this.velocidadeDoPulo)
    this.velocidadeDoPulo += + this.gravide

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.velocidadeDoPulo = 0
      this.pulos = 0
    }
  }

  estaColidindo(inimigo) {
    const precisao = .7

    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura,
    )

    return colisao
  }
}