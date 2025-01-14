let edat = prompt("Introdueixi la seva edat per saber si pots votar","Has de ser mayor de 18 anys.");
let edatCorrecta = confirm("Edat introduïda correcta? ("+edat+")");

if (Number(edat)>=18 && edatCorrecta){
    console.log("Pots votar :3");
}else{
    console.log("Encara no pots...");
}