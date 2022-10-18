let pratoDoDia = (dia) => {
    switch(dia){
        case "segunda":
            console.log(`O prato de ${dia} é lasanha.`);
            break;
        case "terça":
            console.log(`O prato de ${dia} é bife com fritas.`);
            break;
        case "quarta":
            console.log(`O prato de ${dia} é almondega com macarrão.`);
            break;
        case "quinta":
            console.log(`O prato de ${dia} é frango a parmegiana.`);
            break;
        case "sexta":
            console.log(`O prato de ${dia} é feijoada.`);
            break;
    }
}

pratoDoDia("quarta");