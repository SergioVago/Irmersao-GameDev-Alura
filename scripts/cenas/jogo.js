class Jogo {
  constructor() {
    this.indice = 0
    this.mapa = fita.mapa
  }

  setup() {
    const alturaChao = 30 * calculaProporcao()

    cenario = new Cenario(imagemCenario, 3)
    pontuacao = new Pontuacao(100 * calculaProporcao())

    vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, alturaChao, 220 * calculaProporcao(), 270 * calculaProporcao(), 220, 270)
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width, alturaChao, 104 * calculaProporcao(), 104 * calculaProporcao(), 104, 104)
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width + 1000, -alturaChao, 400 * calculaProporcao(), 400 * calculaProporcao(), 400, 400)
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width + 500, (220 * calculaProporcao()) * 1.5, 200 * calculaProporcao(), 150 * calculaProporcao(), 200, 150)

    inimigos.push(inimigo)
    inimigos.push(inimigoGrande)
    inimigos.push(inimigoVoador)
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula(somPulo)
    }
  }

  draw() {
    cenario.exibe()
    cenario.move()

    vida.draw()

    pontuacao.exibe()
    pontuacao.adicionarPonto()

    personagem.exibe()
    personagem.aplicaGravidade()

    const linhaAtual = this.mapa[this.indice]
    const inimigo = inimigos[linhaAtual.inimigo]
    const inimigoVisivel = inimigo.x < -inimigo.largura

    inimigo.velocidade = linhaAtual.velocidade

    inimigo.exibe()
    inimigo.moveX(inimigo.velocidade)

    if (inimigoVisivel) {
      if (++this.indice > this.mapa.length - 1) {
        this.indice = 0
      }
      inimigo.aparece()
    }

    if (personagem.estaColidindo(inimigo)) {
      vida.perdeVida()
      personagem.tornarInvencivel()
      if (vida.vidas === 0) {
        image(imagemGameOver, (width / 2) - 200, height / 3)
        noLoop()
      }
    }
  }

}