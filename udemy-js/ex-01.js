//console.log("O arquivo está funcionando.");

const nome = "Rafael";
const idade = 43;
const matricula = 05001635;
const notaProva1 = 8.2;
const notaProva2 = 7.6;
const media = (notaProva1 + notaProva2)/2;


//console.log(`Olá, me chamo ${nome}, tenho ${idade} anos e estou aprendendo Javascript.`)

//console.log(`O aluno ${nome}, matrícula ${matricula}, obteve a média final ${media.toFixed(2)}`);

let numCelular = "984538101";

let verificaNum = (celular) => {
    if (celular.length == 9){
        console.log("true");
    } else {
        console.log("false");
    }
}

//verificaNum(numCelular);
//console.log(typeof numCelular);
//console.log(numCelular[3]);

console.log(Math.pow(32, 5));