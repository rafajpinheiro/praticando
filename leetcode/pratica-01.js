let matriz = [2,5,15,5,3,9,32,11,17,1];

function soma(lista, resultado) {
    
    for (i=0; i<lista.length; i++)
    if (lista[i] + lista[i+1] == resultado)
    console.log(lista[i], lista[i+1]);
}

soma(matriz,18);