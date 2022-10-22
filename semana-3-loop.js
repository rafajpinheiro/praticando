/*
let n = 0;
let x = 0;

let testeLoop = () => {
    while(n<3){
        n++;
        x += n;
    }

    console.log(n,x)
}

testeLoop();
*/

/*
let salario = 1000;

while (salario < 5000) {
    salario += 100;
    console.log("O salário ainda é R$ " + salario);
}
*/

/*
let contador = 0;

while (contador <= 50) {
    console.log("repetição nº " + contador);
    contador++;
}
*/

const cores = ['verde','amarelo', 'azul','branco','cinza'];

let indice = 1;


while (indice < cores.length) {
    console.log(indice, cores[indice]);
    indice++;
}

console.log(cores.length);
