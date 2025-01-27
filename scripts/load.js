function calculaProporcao() {
  return width > height ? width * 0.0004 : height * 0.001
}

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemGameOver = loadImage('imagens/assets/game-over.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png')
  imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png')
  imagemTelaInicial = loadImage('imagens/assets/telaInicial.png')
  imagemVida = loadImage('imagens/assets/coracao.png')

  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf')

  fita = loadJSON('fita/fita.json')

  musica = loadSound('sons/trilha_jogo.mp3')
  somPulo = loadSound('sons/somPulo.mp3')
}
