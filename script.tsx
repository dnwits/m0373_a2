interface Pokemon {
    nombre: string;
    tipo: string;
    nivel:Number;
}

const pokemons: Pokemon[] = [
    { nombre: "Pikachu", tipo: "Elèctric", nivel: 25 },
    { nombre: "Charmander", tipo: "Foc", nivel: 18 },
    { nombre: "Squirtle", tipo: "Aigua", nivel: 20 },
    { nombre: "Bulbasaur", tipo: "Planta/Veneno", nivel: 22 },
    { nombre: "Eevee", tipo: "Normal", nivel: 15 },
    { nombre: "Gengar", tipo: "Fantasma/Veneno", nivel: 40 },
    { nombre: "Snorlax", tipo: "Normal", nivel: 50 },
    { nombre: "Jigglypuff", tipo: "Fada/Normal", nivel: 12 },
    { nombre: "Lucario", tipo: "Lluita/Acero", nivel: 45 },
    { nombre: "Machop", tipo: "Lluita", nivel: 16 },
    { nombre: "Pidgeot", tipo: "Normal/Volador", nivel: 36 },
    { nombre: "Onix", tipo: "Rock/Terrestre", nivel: 30 },
    { nombre: "Alakazam", tipo: "Psíquic", nivel: 42 },
    { nombre: "Gyarados", tipo: "Aigua/Volador", nivel: 38 },
    { nombre: "Arcanine", tipo: "Foc", nivel: 47 },
    { nombre: "Mewtwo", tipo: "Psíquic", nivel: 70 },
    { nombre: "Charizard", tipo: "Foc/Volador", nivel: 50 },
    { nombre: "Lapras", tipo: "Aigua/Glaç", nivel: 34 },
    { nombre: "Vaporeon", tipo: "Aigua", nivel: 28 },
    { nombre: "Flareon", tipo: "Foc", nivel: 29 },
    { nombre: "Espeon", tipo: "Psíquic", nivel: 31 },
    { nombre: "Umbreon", tipo: "Fosc", nivel: 32 },
    { nombre: "Leafeon", tipo: "Planta", nivel: 27 },
    { nombre: "Glaceon", tipo: "Glaç", nivel: 26 },
    { nombre: "Sylveon", tipo: "Fada", nivel: 30 }
];


const tablaBody = document.getElementById("tabla-body");

if (tablaBody) {
    pokemons.forEach(pokemon => {
        const fila = document.createElement("tr");

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = pokemon.nombre;
        fila.appendChild(celdaNombre);

        const celdaTipo = document.createElement("td");
        celdaTipo.textContent = pokemon.tipo;
        fila.appendChild(celdaTipo);

        const celdaNivel = document.createElement("td");
        celdaNivel.textContent = pokemon.nivel.toString();
        fila.appendChild(celdaNivel);

        tablaBody.appendChild(fila);
    });
}
