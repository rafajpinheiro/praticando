function msg(turno){

    switch (turno) {
        case "manhã":
            console.log("Bom dia!");
            break;
        case "tarde":
            console.log("Boa tarde!");
            break;
        case "noite":
            console.log("Boa noite!");
            break;
    }
}

msg("noite");