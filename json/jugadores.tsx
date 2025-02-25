type Jugador = {
    nombre: string;
    edat: Number;
    equip:string;
}; 
// Llegim el fitxer JSON amb informació sobre jugadors
const filecontent2  = await Bun.file("jugadors.json").text();
// Convertim el contingut a un array d'objectes Player
const jugadors: Jugador[] = JSON.parse(filecontent2);
// Mostrem els jugadors per consola
jugadors.forEach((player) => {
    console.log(`Nom: ${player.nom}, Edat: ${player.edat}, Equip: ${player.equip}`);
});

const tablaBody1 = document.getElementById("tabla-body");

if (tablaBody1) {
    jugadors.forEach(jugador => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = jugador.nom;
        fila.appendChild(celdaNombre);

        const celdaEdat = document.createElement("td");
        celdaEdat.textContent = jugador.edat.toString();
        fila.appendChild(celdaEdat);

        const celdaEquipo = document.createElement("td");
        celdaEquipo.textContent = jugador.equip;
        fila.appendChild(celdaEquipo);

        tablaBody1.appendChild(fila);
    });
}