// // Leer los datos del archivo JSON y mostrarlos en la tabla
//     try {
//       const response = await fetch("jugadors.json");
//       const jugadors = await response.json();
  
//       const tbody = document.getElementById("taulaJugadors");
  
//       jugadors.forEach((jugador) => {
//         var fila = document.createElement("tr");
  
//         var nom = document.createElement("td");
//         nom.textContent = jugador.nom;
  
//         var edat = document.createElement("td");
//         edat.textContent = jugador.edat;
  
//         var equip = document.createElement("td");
//         equip.textContent = jugador.equip;
  
//         fila.appendChild(nom);
//         fila.appendChild(edat);
//         fila.appendChild(equip);
  
//         tbody.appendChild(fila);
//       });
//     } catch (error) {
//       console.error("Error al carregar els jugadors:", error);
//     }
// Importar los datos desde jugadors.json
fetch("jugadors.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  })
  .then((jugadors) => {
    // Seleccionar el cuerpo de la tabla
    const tablaBody = document.getElementById("tabla-body");

    // Asegurarse de que exista la tabla en el DOM
    if (tablaBody) {
      // Iterar sobre los jugadores y añadir filas
      jugadors.forEach((jugador) => {
        const fila = document.createElement("tr");

        // Crear celda para el nombre
        const celdaNom = document.createElement("td");
        celdaNom.textContent = jugador.nom;
        fila.appendChild(celdaNom);

        // Crear celda para la edad
        const celdaEdat = document.createElement("td");
        celdaEdat.textContent = jugador.edat.toString();
        fila.appendChild(celdaEdat);

        // Crear celda para el equipo
        const celdaEquip = document.createElement("td");
        celdaEquip.textContent = jugador.equip;
        fila.appendChild(celdaEquip);

        // Añadir la fila a la tabla
        tablaBody.appendChild(fila);
      });
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  