let imagemCenario
let imagemPersonagem
let imagemInimigo

let musica

let cenario

let personagem
let inimigo

const matrizPersonagem = calculaMatriz(880, 1080, 4, 4)
const matrizInimigo = calculaMatriz(420, 700, 4, 7)

function calculaProporcao() {
  return width > height ? width * 0.0004 : height * 0.001
}

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png')
  imagemPersonagem = loadImage('imagens/personagem/correndo.png')
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png')
  musica = loadSound('sons/trilha_jogo.mp3')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3)
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 220 * calculaProporcao(), 270 * calculaProporcao(), 220, 270)
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 104 * calculaProporcao(), 104 * calculaProporcao(), 104, 104)

  frameRate(40)
  // musica.loop()
}

function keyPressed() {
  if (key === 'ArrowUp') {
    personagem.pula(70)
  }
}

function draw() {
  cenario.exibe()
  cenario.move()

  personagem.exibe()
  personagem.aplicaGravidade()

  inimigo.exibe()
  inimigo.moveX(10)

  if (personagem.estaColidindo(inimigo)) {
    console.log('Colidu');
    noLoop()
  }
}

