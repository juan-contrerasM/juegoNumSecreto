let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numMaximo = prompt("ingrese el rango maximo que desea para encontrar el numero");
estructuraIni()



//funcion asignar texto
function asignarTexto(elemento, texto) {
    //obtener un elemento html
    let etiqueta = document.querySelector(elemento);
    //agregar un texto
    etiqueta.innerHTML = texto;
}
function limpiarCaja() {
    document.querySelector('#valorUsario').value = '';


}

//-----------------------funcio de botones-------------------
function verificarIntento() {
    let numeroUsario = parseInt(document.getElementById('valorUsario').value);
    intentos++;
    console.log(intentos);
    //acerto
    if (numeroUsario == numeroSecreto) {
        asignarTexto('p', `acertaste el numero en ${intentos} ${intentos > 1 ? 'veces' : 'vez'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    //no acerto
    else {
        if (numeroUsario != numeroSecreto) {
            asignarTexto('p', `numero incorrecto, el numeor es ${numeroUsario > numeroSecreto ? 'es menor' : 'es mayor'}`);
            limpiarCaja();
        }
    }
}
function estructuraIni() {
    asignarTexto('h1', 'juego del numero secreto');
    asignarTexto('p', `indica un numero del 1-${numMaximo}`);
    intentos = 0;
    numeroSecreto = generarNumero();
}

function reiniciarJuego() {
    limpiarCaja();
    estructuraIni();
    document.querySelector('#reiniciar').setAttribute('disabled', true);



}


//funcion genera el numero secreto
function generarNumero() {
    let num = Math.floor(Math.random() * numMaximo) + 1;
    console.log(num);
    console.log(listaNumeros);
    if (listaNumeros.length == numMaximo) {
        asignarTexto('p','ya se sortearon todos los numeros posibles')
     

    } else {
        if (listaNumeros.includes(num)) {
            return generarNumero();
        } else {
            listaNumeros.push(num);
            return num;
        }
    }
}

