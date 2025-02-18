type Alumne = {
    nom: string;
    edat: number;
    curs: string;
  };
  
  const alumnes: Alumne[] = [
    { nom: "Anna", edat: 14, curs: "3r ESO" },
    { nom: "Joan", edat: 15, curs: "4t ESO" },
    { nom: "Maria", edat: 13, curs: "2n ESO" },
  ];

//2n param > null (comportamiento por defecto):
    // Si es una función, define cómo se transforman los valores del objeto durante la conversión a JSON.
    // Si es un array, filtra qué propiedades se incluyen en el JSON.
// //3r param > space (controla la indentación y el formato del JSON resultante.)
    // Si es un número, indica cuántos espacios se usarán para sangrar (indentación).
    // Si es una cadena de texto, usa esa cadena como indentación (por ejemplo, '\t' para tabuladores).

    try {
      // 1. Fitxer amb només algunes propietats (array com a replacer)
      const onlyNames = JSON.stringify(alumnes, ["nom"], 2);
      await Bun.write("alumnes_only_names.json", onlyNames);
  
      // 2. Fitxer amb transformació (funció com a replacer)
      const uppercaseNames = JSON.stringify(
        alumnes,
        (key, value) => (key === "nom" ? value.toUpperCase() : value),
        2
      );
      await Bun.write("alumnes_uppercase_names.json", uppercaseNames);
  
      // 3. Fitxer amb indentació de tabuladors ('\t')
      const tabbed = JSON.stringify(alumnes, null, "\t");
      await Bun.write("alumnes_tabbed.json", tabbed);
  
      console.log("Fitxers guardats correctament amb diferents configuracions");
    } catch (error) {
      console.error("Error en guardar els alumnes:", error);
    }

  