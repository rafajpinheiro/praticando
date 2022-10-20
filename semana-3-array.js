const produtos = [
    { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
  ];

  //console.log(produtos[1].descricao);

  let totalDoProduto = (indice) => {
    valor = produtos[indice].valor * produtos[indice].quantidade;
    return valor;
  }

  console.log(totalDoProduto(2));