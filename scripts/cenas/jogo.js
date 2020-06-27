class Jogo {
  constructor() {
    this.inimigoAtual = 0
  }

  setup() {
    const alturaChao = 30 * calculaProporcao()

    cenario = new Cenario(imagemCenario, 3)
    pontuacao = new Pontuacao(200 * calculaProporcao())

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, alturaChao, 220 * calculaProporcao(), 270 * calculaProporcao(), 220, 270)
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, alturaChao, 104 * calculaProporcao(), 104 * calculaProporcao(), 104, 104)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width + 500, (220 * calculaProporcao()) * 1.5, 200 * calculaProporcao(), 150 * calculaProporcao(), 200, 150)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width + 1000, -alturaChao, 400 * calculaProporcao(), 400 * calculaProporcao(), 400, 400)

    inimigos.push(inimigo)
    inimigos.push(inimigoVoador)
    inimigos.push(inimigoGrande)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula(somPulo)
    }
  }

  draw() {
    cenario.exibe()
    cenario.move()

    pontuacao.exibe()
    pontuacao.adicionarPonto()

    personagem.exibe()
    personagem.aplicaGravidade()

    const inimigo = inimigos[this.inimigoAtual]
    const inimigoVisivel = inimigo.x < -inimigo.largura

    inimigo.velocidade = parseInt(random(10, 30))
    inimigo.delay = parseInt(random(500, 1000))

    inimigo.exibe()
    inimigo.moveX(inimigo.velocidade)

    if (inimigoVisivel) {
      if (++this.inimigoAtual > 2) {
        this.inimigoAtual = 0
      }
    }

    if (personagem.estaColidindo(inimigo)) {
      image(imagemGameOver, (width / 2) - 200, height / 3)
      noLoop()
    }
  }

}