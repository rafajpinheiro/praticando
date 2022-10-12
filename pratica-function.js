/*
let nome = "Rafael"
let sobrenome = "Pinheiro"

function exibirNome(){
    console.log(nome + " " + sobrenome);
}

exibirNome();


function soma(n1, n2){
    console.log(n1 + n2);
}

soma(10,5);
soma("Rio de ","Janeiro");


function multiplicacao(x,y){
    return x * y;
}

let resultado = multiplicacao(5,10);

console.log(resultado);




function toCelsius(temp){
    return (5/9) * (temp-32);
}

let temperatura = toCelsius(77);
console.log("A temperatura atual é " + temperatura + "º graus Celsius.");



function qualCarro(){
    let marcaCarro = "Fiat";
    return marcaCarro;
}

console.log(qualCarro());
*/


function campeao(time){
    time.titulos = 10;
}

let meutime = {titulos: 20};

let timeA;
let timeB;

timeA = meutime.titulos;
console.log(timeA);

campeao(meutime);
timeB = meutime.titulos;
console.log(timeB);