let resultado=1;
calcularFactorial(5);
function calcularFactorial(numero) {
    let contador=numero;
    
    while(contador>0){
        resultado*=contador;
        contador--;
    }
    console.log(resultado);
}