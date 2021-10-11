const fs = require('fs');
const tareas = fs.readFileSync("./tareas.json", {encoding:"utf-8"});

let tareasParseadas = JSON.parse(tareas)
var args = process.argv[2];

switch(args){
    case "listar":
        for (let i=0; i < tareasParseadas.length; i++){
    console.log("tareas:  ", i+1)
    console.log("Titulo:  ",tareasParseadas[i].titulo)
    console.log("estado:  ",tareasParseadas[i].estado)
    console.log("---------------------------------")
}
    break;
    case "":
        console.log("Atención - Tienes que pasar una acción .");
        break;
    default:
        console.log("No entiendo qué quieres hacer.")
}





