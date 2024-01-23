//variables
let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

// Funciones

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoelemento(elemento, texto) {
    let  elementoHTML =document.querySelector (elemento)
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) +1;

    console.log(numerosSorteados);
    console.log(generarNumeroSecreto);
    //si ya sorteamos todos los numeros 
    if(numerosSorteados.length == numeroMaximo){
        asignarTextoelemento('p', `El juego ya llego al limite de numeros generados`); 
    } else {
        //si el numero generado esta en la lista 
        if(numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {  
            numerosSorteados.push(numeroGenerado);
             return numeroGenerado;
         }
    }

}

function condicionesIniciales() {
    asignarTextoelemento('H1','Juego del numero secreto');
    asignarTextoelemento('p', `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto)
    numeroIntentos=1;
}

function reiniciarJuego() {
    //reiniciar caja
    limpiarCaja();
        /*indicar mensaje de numeros
        generar el numero aleatorio
        inicializar el numero de intentos todo esto lo realizamos con la funcion de condicionesIniciales*/
   condicionesIniciales();
        //deshabilitar el boton del juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

function verificarIntento() {
    let numeroUsuario =parseInt(document.getElementById("valorUsuario").value);

    if(numeroSecreto===numeroUsuario){
      asignarTextoelemento("p",`Acertaste el numero secreto en ${numeroIntentos} ${numeroIntentos == 1 ? "intento" : "intentos"}`);
      document.querySelector('#reiniciar').removeAttribute('disabled');
   } else{ 
       if(numeroUsuario > numeroSecreto){
            asignarTextoelemento("p","El numero secreto es menor");
        } else {
            asignarTextoelemento("p","El numero secreto es mayor");
        }
        numeroIntentos++;
        limpiarCaja();
    }
    return;
};

condicionesIniciales()


