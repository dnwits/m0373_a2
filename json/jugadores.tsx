type Jugador = {
    nombre: string;
    edat: Number;
    equip:string;
}; 
const filecontent2  = await Bun.file("jugadorScript.json").text();

const jugadors: Jugador[] = JSON.parse(filecontent2);

jugadors.forEach
//a medias