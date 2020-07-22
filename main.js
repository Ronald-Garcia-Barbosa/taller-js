let peso = prompt("Ingrese tu peso: ");
let altura = prompt("Ingrese su altura: ");

function IMC (peso, altura){
    let resultado = peso/(altura^2);
    console.log("Tu indice de masa corporal es: " + resultado);
}
IMC(peso, altura);