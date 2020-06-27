class Personagem extends Animacao {
  constructor(
    matriz,
    imagem,
    x,
    variacaoY,
    largura,
    altura,
    larguraSprite,
    alturaSprite,
  ) {
    super(
      matriz,
      imagem,
      x,
      variacaoY,
      largura,
      altura,
      larguraSprite,
      alturaSprite,
    )

    this.velocidadeDoPulo = 0
    this.gravide = 3
    this.alturaDoPulo = -30
    this.pulos = 0
  }

  pula(somPulo) {
    if (++this.pulos <= 2) {
      this.velocidadeDoPulo = this.alturaDoPulo
      somPulo.play()
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
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao,
    )

    return colisao
  }
}