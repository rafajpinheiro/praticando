let verifica = (nomeUsuario, senha) => {
    if (nomeUsuario == senha) {
        console.log(" O nome de usuário não pode ser igual a senha.");
    } else {
        console.log("Nome de usuário e senha cadastrados com sucesso.");
    }
}

verifica("rafael", "rafa");