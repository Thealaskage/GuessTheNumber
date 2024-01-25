let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroIngresado = document.getElementById('numeroIngresado');
    console.log(numeroSecreto);
    if(numeroIngresado.value == numeroSecreto){
        asignarTextoElemento('p', `Ganaste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`); 
        document.getElementById('reiniciar').removeAttribute('disabled');  
    }else if(numeroIngresado.value > numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es menor');
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    
    document.getElementById('reiniciar').setAttribute('disabled', true);    
 

}

function limpiarCaja(){
    document.getElementById('numeroIngresado').value = '';
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    if(listaNumerosSorteados.length == numeroMaximo){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del adivino');
    asignarTextoElemento('p', `Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();

