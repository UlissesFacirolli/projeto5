let palavra;
let imagem;
let musica;

function preload(){

   imagem = loadImage("Peixonaro.png");
  musica = loadSound("musica.mp3");
}

function setup() {
  createCanvas(700, 700);
   palavra = dormin();
  musica.loop();
}

function draw() {
  background("white");
  image(imagem,0,0,600,600);
  wander();
  seifer();
  dormin();
}

function wander(){
  fill ("blue");
  textSize(64);
  textAlign(CENTER,CENTER);
}

function seifer(){
  let maximo = width;
  let minimo = 0 ;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}

function dormin(){
 let palavras = [" o", "povo", "quer", "comer", "bolsonaro"];
  return random(palavras);
}

  
  
  
  
