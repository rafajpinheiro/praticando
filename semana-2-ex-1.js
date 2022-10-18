/*
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
*/


let saudacao = (hora) =>{
    const d = new Date();
    hora = d.getHours();
    
    if (hora >= 6 && hora <=11){
        console.log("Bom dia!");
    } else if (hora >= 12 && hora < 18){
        console.log("Boa tarde!");
    } else{
        console.log("Boa noite!");
    }
}

saudacao();