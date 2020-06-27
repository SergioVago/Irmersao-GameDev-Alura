function setup() {
  createCanvas(windowWidth, windowHeight);

  telaInicial = new TelaInicial()

  jogo = new Jogo()
  jogo.setup()

  cenas = {
    jogo,
    telaInicial
  }

  botaoGerenciador = new BotaoGerenciador('INICIAR', width / 2, height / 2)

  frameRate(40)
  // musica.loop()
}

function keyPressed() {
  jogo.keyPressed(key)
}

function draw() {
  cenas[cenaAtual].draw()
}

