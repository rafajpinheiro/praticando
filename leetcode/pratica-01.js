let matriz = [2,7,4,5];

function soma(lista, resultado) {
    
    for (i=0; i<lista.length; i++)
    if (lista[i] + lista[i+1] == resultado)
    console.log(lista[i], lista[i+1]);
}

soma(matriz,9);