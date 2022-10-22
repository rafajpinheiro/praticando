function verificaNota(nota){
    if (nota >=0 && nota <=10) {
        console.log(`A nota ${nota} é um valor válido.`);
    } else {
        console.log(`A nota ${nota} não é um valor válido.`);
    }
}

verificaNota(32);