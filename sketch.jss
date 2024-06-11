//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro /2;

//velocidade da bolinha
let velocidadeXBolinha = -6;
let velocidadeYBolinha = 6;

//variáveis raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

let colidiu = false;


function setup() {
  createCanvas(600,400);
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentaBolinha ();
  verificaColisaoBorda();
  mostraRaquete (xRaquete,yRaquete);
  movimentaMinhaRaquete ();
  VerificaColisaoRqt ();
  mostraRaquete (xRaqueteOponente,yRaqueteOponente);
  //colisaoMinhaRqtBiblioteca ();
  movimentaRaqueteOponente();
  verificaColisaoRqtOponente ();
  incluiPlacar ();
  marcaPonto ();
}

function mostraBolinha (){
  circle(xBolinha,yBolinha,diametro);
  
}

function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha
}

function verificaColisaoBorda (){
  if (xBolinha + raio > width || xBolinha< 0)
    velocidadeXBolinha *= -1;
  if (yBolinha + raio > height || yBolinha - raio < 0){ 
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete (x,y){
  rect(x,y ,raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete (){
  if (keyIsDown (UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown (DOWN_ARROW)){
    yRaquete += 10;
  }
  
}

function VerificaColisaoRqt(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha- raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete ){
    velocidadeXBolinha *= -1;
  }
}
  

function movimentaRaqueteOponente (){
  if (keyIsDown (87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown (83)){
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRqt (x,y){
  colidiu =collideRectCircle (x,y, raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio);
  if (colidiu){
    velocidadeXBolinha *= -1;
  }
}

function verificaColisaoRqtOponente (){
  if (xBolinha - raio < xRaqueteOponente + raqueteComprimento && yBolinha - raio < yRaqueteOponente + raqueteAltura && xBolinha + raio > xRaqueteOponente){
    velocidadeXBolinha *= -1;
  }
}

function incluiPlacar (){
  stroke (255);
  textAlign (CENTER);
  textSize (20);
  fill (color (173,216,230));
  rect (150,10,40,20)
  fill (105,89,205);
  text (meusPontos, 170, 26);
  fill (color (173,216,230));
  rect (450,10,40,20);
  fill (105,89,205);
  text (pontosOponente,470, 26);
}

function marcaPonto (){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}