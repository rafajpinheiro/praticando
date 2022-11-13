let conteudoVermelha = document.getElementById("caixa-vermelha").innerHTML;

let conteudoAmarela = document.getElementById("caixa-amarela").innerHTML

console.log(conteudoVermelha);

console.log(conteudoAmarela);

document.getElementById("caixa-amarela").innerHTML = "<h3>" + conteudoAmarela + " " + conteudoVermelha + "</h3>";