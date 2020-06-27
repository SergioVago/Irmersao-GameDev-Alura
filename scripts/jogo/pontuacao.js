class Pontuacao { 
  constructor(textSize) {
    this.pontos = 0
    this.textSize = textSize
  }

  exibe() {
    textAlign(RIGHT)
    fill('#FFF')
    textSize(this.textSize)
    text(parseInt(this.pontos), width - this.textSize , this.textSize)
  }

  adicionarPonto() {
    this.pontos += 0.2
  }
}