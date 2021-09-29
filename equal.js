function equacao(){
 window.alert('continha!');
 let coeficienteA = document.querySelector('#coeficiente-a');
let quantA = coeficienteA.value;
let coeficienteB = document.querySelector('#coeficiente-b');
let quantB = coeficienteB.value;
let coeficienteC = document.querySelector('#coeficiente-c');
let quantC = coeficienteC.value;
let x1=document.querySelector('#resultado-x1');
let valorx1;
let x2=document.querySelector('#resultado-x2');
let valorx2;
let discriminante = document.querySelector('#resultado-delta');
let quantDelta;
quadradoB = quantB*quantB;
quantDelta = quadradoB -4 * quantA*quantC;
discriminante.value = quantDelta;
let raizDelta = Math.sqrt(quantDelta);

if(quantDelta >= 0){
    valorx1 = ((-quantB)+raizDelta)/(2*quantA);
    valorx2 = ((-quantB)-raizDelta)/(2*quantA);
    
}
else{
    valorx1 = '';
    valorx2 = '';
}
x1.value = valorx1;
x2.value = valorx2;
}
 
let botaoResolver = document.querySelector('#resolver');
botaoResolver.addEventListener('click', equacao);
