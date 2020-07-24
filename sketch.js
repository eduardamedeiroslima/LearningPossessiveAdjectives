//link da primeira parte da explicação:https://www.youtube.com/watch?v=5ApCNNC6MIY
//link da segunda parte da explicação:https://www.youtube.com/watch?v=xecOpDaOImM
//link da terceira parte da explicação:https://www.youtube.com/watch?v=a30EZHj-feU
//link da última parte da explicação:https://www.youtube.com/watch?v=jgzG5lfsHFw&t=5s
//link do video de demonstração que na última parte ficou cortado:https://www.youtube.com/watch?v=mhgrYumOpno

var x=56;
var y=350;
var xd=50;
var yd=100;
var xo=150;
var yo=100;
var xm=250;
var ym=100;
var xc=350;
var yc=100;
var xt=450;
var yt=100;
var xv=550;
var yv=100;
var xp=550;
var yp=300;
var raio1=27.5;
var raio2=27.5;
var raio3=50;
var raio4=50;
var Vidas=3;
var Pontos=0;
var Nível=1;
var Frase1=" He is ______ teacher (meu)";
var Frase2=" That’s _____ car (meu)";
var Frase3="“____ brothers? (seu)";
var Frase4="This is _____ mother, Jane (dele)";
var Frase5="This is ____ house(dela)";
var Frase6="Hey! These are ___ seats! (nossos)";

var tela=1;
var largura=200;
var altura=50;
var xmenu1=220;
var ymenu1=100;
var ymenu2=210;
var ymenu3=300;

var xtext=120;
var ytext=100;
var largura2=500;
var altura2=150;

let audio;
let audio2;
let audio3;

let img;
let img2;
let img3

function preload() {
  audio=createAudio('Quirky-Game-World.mp3');
  img=loadImage('duda_n.jpg');
  img2=loadImage('american.jpg');
  img3=loadImage('tela.jpg')
}

function setup() {
  createCanvas(700, 400);
  //audio.loop(true)
}
//tela 5//
function draw() {
  if(tela==5){
      background(20)
    image(img3,-5,-5,700,400)
     textSize(20)
    textAlign(LEFT);
  stroke(400);
  fill(20);
 
  fill(20);
  text("* O jogo tem 7 níveis e o jogador possui 3 vidas e é voltado",20,50);
    
     
  fill(20);
  text("para alunos do 6° ano do ensino fundamental;",20,70);
  
 
  fill(20);
  text("* O jogo consiste em através da frase fixada na parte superior esquerda ",20,100);
  
   
  fill(20);
  text("da tela o jogador reconhecer o adjetivo possessivo de forma inteligível",20,120);
  
  
  fill(20);
  text("reconhecendo o adjetivo que melhor se enquadra no entendimento",20,140);
  
  
  fill(20);
  text("da frase;",20,160);
  
   
  fill(20);
  text("* Se o jogador conseguir avançar e acertar a maioria dos adjetivos ele",20,200);
  
  
  fill(20);
  text("passa para o nível seguinte, do contrário retorna para a fase inicial; ",20,220);
  
  
  
  fill(20);
  text("* O movimento da elipse é realizado pressionando as setas esquerda",20,250);
  
  
  fill(20);
  text("seta direita, seta para cima e seta para baixo;",20,270);
    
    fill(20);
  text("*HABILIDADES: ",20,300);
  
  
  fill(20);
  text("(EF06LI23) Empregar, de forma inteligível, os adjetivos possessivos.",20,320);
  
  
  
     if(mouseX > 8 && mouseX < 80 && mouseY > 370 && mouseY < 400){
      stroke(400);
      fill(220);
      rect(8, 372, 80, 50);
       if(mouseIsPressed){
      tela=1;
    }
  }
  fill(20);
  text("VOLTAR",10,375); 
  } 
  //tela 2//
  if(tela==2){
  background(20);
  image(img3,-1,-1,700,400);
  textAlign(LEFT);
  fill(20);
  ellipse(x,y, 2*raio1, 2*raio2);
  if(keyIsDown(LEFT_ARROW)) {
    if(x>20){
     x = x - 6;
   }
  }
  if(keyIsDown(RIGHT_ARROW)){
    if(x<680){
    x = x + 6;
   }
  }
  if(keyIsDown(UP_ARROW)){
    if(y>10){
    y = y - 6;
   }
  }
  if(keyIsDown(DOWN_ARROW)){
    if(y<380){
    y = y + 6;
   }
  }
  ///primeira elipse:
  textSize(30)
  fill(20);
  ellipse(xd,yd,100,100)
 if( dist(x, y, xd, yd)<raio1+raio3){
   x=56;
   y=350;
   if( Nível==1 || Nível==2) {
   Pontos=Pontos+1;
   Nível=Nível+1;
   }else{
     if( Pontos!=0 ){
       Pontos=Pontos-1;
     } 
     if(Vidas>0){
         Vidas=Vidas-1;
       }
     if(Vidas==0){
       tela=3;
     }
   }
 }
  fill('rgb(100%,0%,10%)');
  text('My',25,100);
  /// segunda elipse:
  textSize(30)
  fill(20);
  ellipse(xo,yo,100,100);
  if(dist(x,y,xo,yo)<raio1+raio3){
    x=56;
    y=350;
    if(Nível==4){
      Pontos=Pontos+1
      Nível=Nível+1
    }else{
      if( Pontos!=0 ){
       Pontos=Pontos-1;
      }
      if(Vidas>0){
         Vidas=Vidas-1;
       }
      if(Vidas==0){
       tela=3;
      }
     }
   }
   fill('rgb(100%,0%,10%)');
   text('His',125,100);
  ///terceira elipse:
  textSize(30)
  fill(20);
  ellipse(xm,ym,100,100);
  if(dist(x,y,xm,ym)<raio1+raio3){
    x=56;
    y=350;
    if(Nível==5){
      Pontos=Pontos+1
      Nível=Nível+1
    }else{
  if( Pontos!=0 ){
     Pontos=Pontos-1;
     }
      if(Vidas>0){
         Vidas=Vidas-1;
       }
      if(Vidas==0){
       tela=3;
      }
    }
  }
  fill('rgb(100%,0%,10%)');
  text('Her',225,100);
  ///quarta elipse:
  textSize(30)
  fill(20);
  ellipse(xc,yc,100,100);
  if(dist(x,y,xc,yc)<raio1+raio3){
    x=56;
    y=350;
    
    if(Pontos!=0){
      Pontos=Pontos-1
    }
    if(Nível>1){
      Nível=Nível-1
    }
    if(Vidas>0){
      Vidas=Vidas-1
   }
    if(Vidas==0){
       tela=3;
      }
  }
   fill('rgb(100%,0%,10%)');
   text('Its',330,100);
//quinta elipse:
 textSize(30)
fill(20);
  ellipse(xt,yt,100,100)
  if(dist(x,y,xt,yt)<raio1+raio3){
    x=56;
    y=350;
   if(Nível==6){
     Pontos=Pontos+1
     Nível=Nível+1
     tela=4;
   }else{
if( Pontos!=0 ){
  Pontos=Pontos-1;
     }
     if(Vidas>0){
         Vidas=Vidas-1;
       }
     if(Vidas==0){
       tela=3;
      }
   }
  }
    fill('rgb(100%,0%,10%)');
    text('Our',420,100);
  ///sexta elipse:
  textSize(30)
  fill(20);
  ellipse(xv,yv,100,100);
  if(dist(x,y,xv,yv)<raio1+raio3){
    x=56;
    y=350;
    if(Nível==3){
      Pontos=Pontos+1
      Nível=Nível+1;
    }else{
 if( Pontos!=0 ){
       Pontos=Pontos-1;
     }  
      if(Vidas>0){
         Vidas=Vidas-1;
       }
      if(Vidas==0){
       tela=3;
      }
    }
  }
  
    fill('rgb(100%,0%,10%)');
    text('Your',520,100);

  ///Sétima elipse:
  textSize(30)
  fill(20);
  ellipse(xp,yp,100,100);
  if(dist(x,y,xp,yp)<raio1+raio3){
    x=56;
    y=350;
    if(Pontos!=0){
      Pontos=Pontos-1
    }
    if(Nível>1){
      Nível=Nível-1
    }
    if(Vidas>0){
      Vidas=Vidas-1
   }
    if(Vidas==0){
       tela=3;
      }
  }
    fill('rgb(100%,0%,10%)');
    text('Their',515,300);
    
    if(Vidas==0){
       tela=3;
      }
  
    textSize(18);
  fill(20);
text('Vidas: '+Vidas,10, 30);
  fill(20);
text('Pontos: '+Pontos,230,30);
  fill(20);
text('Nível: '+Nível,120, 30);
  fill(20);
  
  

  if( Nível==1) {
     
text('Frase1: '+Frase1,350, 30);
  
  }
  
  if( Nível==2) {
     
text('Frase2: '+Frase2,350, 30);
  
  }
  if( Nível==3) {
     
text('Frase3: '+Frase3,350, 30);
  
  }
  
  if( Nível==4 ){
     
text('Frase4: '+Frase4,350, 30);
  
  }
  if( Nível==5) {
     
text('Frase5: '+Frase5,350, 30);
  
  }
  
  if( Nível==6) {
     
text('Frase6: '+Frase6,350, 30);
  
  }
  
  textSize(30)
  fill(20);
  ellipse(xd,yd,100,100);
  fill('rgb(100%,0%,10%)');
  text('My',25,100);
 }
  //tela 1//
  if(tela==1){
    telas()
  text('Font Style Italic', 10, 40);
  //tela de menu
  background(20);
  image(img2,0,-2,700,400);
  //menu com duas opções
  //iniciar o jogo
  fill('#222222');
  noStroke( );
  text("learning possessive adjectives",315,20);
  textAlign(CENTER, TOP);
  textSize(30);
  if(mouseX > xmenu1 && mouseX < xmenu1+largura && mouseY > ymenu1 && mouseY < ymenu1+altura){
      stroke(400);
       fill('rgb(100%,0%,10%)');
      rect(xmenu1, ymenu1, largura, altura,20);
  }
  
  noStroke( );
  fill(20);
  text("Start Game",315,110);
  if(mouseX > xmenu1 && mouseX < xmenu1+largura && mouseY > ymenu2 && mouseY < ymenu2+altura){
  stroke(400);
  fill('rgb(100%,0%,10%)');
  rect(xmenu1,ymenu2, largura, altura,20);
    
  }
  
  fill(20);
  noStroke( );
  text("Rules",315,220); 
    
    
    if(mouseX > xmenu1 && mouseX < xmenu1+largura && mouseY > ymenu3 && mouseY < ymenu3+altura){
  stroke(400);
    fill('rgb(100%,0%,10%)');
  rect(xmenu1,ymenu3, largura, altura,20);
    
  }
  
  fill(20);
  noStroke( );
  text("Credits",315,310); 
 }
  //tela 3//
  if(tela==3){
    background(20);
  
  textSize(50)
  stroke(400);
  fill(20);
  rect(xtext,ytext, largura2, altura2,20);
    
    fill('rgb(100%,0%,10%)');
  text("You failed in English",140,170);
  }
  //tela 4//
  if(tela==4){
    background(20);
  
  textSize(45);
  stroke(400);
  fill(20);
  rect(xtext,ytext, largura2, altura2,20);
    
  fill('rgb(100%,0%,10%)');
  text("You passed in English",140,170);
  }
//tela 6//
if(tela==6){
  
  background(20);
  image(img3,-5,-5,700,400);
  image(img,320,220,130,130);
  
  textAlign(LEFT);
  textSize(15)
  stroke(400);
  fill(20);
  
  
  fill(20);
  text("* ORIENTADORES: ",20,20)
  
  fill(20);
  text("Idalmis Milian Sardina Martins;",20,40)
  
  
  fill(20);
  text("Aquiles Medeiros Filgueira Burlamaqui;",20,60);
  
  fill(20);
  text("Rummenigge Rudson Dantas;",20,80);
  
  
  fill(20);
  text("Orivaldo Vieira de Santana Júnior.",20,100);
  
  fill(20);
  text("*EDUCADOR:",300,20);
  
  
  fill(20);
  text("Hévilla Daynara do Nascimento Gusmão;",300,40);
  
  fill(20);
  text("*COLABORADOR:",20,180);
  
  fill(20);
  text("Pablo Durkheim Fernandes do Nascimento",20,200);
  
   fill(20);
  text("*ALUNO:",320,180);
  
  fill(20);
  text("Maria Eduarda da Silva Medeiros Lima;",320,200);
  
    if(mouseX > 8 && mouseX < 80 && mouseY > 370 && mouseY < 400){
      stroke(400);
      fill(220);
      rect(8, 372, 80, 50);
      if(mouseIsPressed){
      tela=1;
    }
  }
  fill(20);
  text("VOLTAR",10,375);
  
 }
}

function telas(){
  // se clicar vai para start game:
  if(mouseX > xmenu1 && mouseX < xmenu1+largura && mouseY > ymenu1 && mouseY < ymenu1+altura){
    if(mouseIsPressed){
      tela=2;
    }
  }
  //se clicar vai pra rules:
  if(mouseX > xmenu1 && mouseX < xmenu1+largura && mouseY > ymenu2 && mouseY < ymenu2+altura){
 if(mouseIsPressed){
      tela=5;
    }
  } 
  // se clicar volta para tela inicial:
    if(mouseX > 8 && mouseX < 80 && mouseY > 370 && mouseY < 400){
      tela=1;
  }
  // se clicar vai para credits
  if(mouseX > xmenu1 && mouseX < xmenu1+largura && mouseY > ymenu3 && mouseY < ymenu3+altura){
if(mouseIsPressed){
      tela=6;
      }
    }
}

function mouseMoved() {
  if(tela == 1){
	  
	  audio.loop();
	  
  }
}