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

    /*
    // Dades d'exemple
const users5 = [
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
      address: {
        street: "Kattie Turnpike",
        suite: "Suite 198",
        city: "Lebsackbury",
        geo: { lat: 40.7128, lng: -74.0060 },
      },
      phone: "024-648-3804",
      website: "ambrose.net",
      company: {
        name: "Hoeger LLC",
        catchPhrase: "Centralized empowering task-force",
        bs: "target end-to-end models",
      },
    },
  ];
  
  // Crear fitxers amb diferents opcions de stringify
  
  // 1. Oopcio null i 2 (per donar-li format amb 2 identacións/tabulació)
  const json1 = JSON.stringify(users5, null, 2);
  await Bun.write('output1.json', json1);
  
  // 2. Sense indentació (tercer argument omès)
  const json2 = JSON.stringify(users5, null);
  await Bun.write('output2.json', json2);
  
  // 3. Utilitzant un replacer (filtrar perque no escrigui email ni telefon)
  const json3 = JSON.stringify(users5, (key, value) => {
    if (key === 'email' || key === 'phone') {
      return undefined; // Exclou l'email i el telèfon
    }
    return value;
  }, 2);
  await Bun.write('output3.json', json3);
  
  // 4. Usant un array com a replacer (només incloure 'name' i 'username')
  const json4 = JSON.stringify(users5, ['name', 'username'], 2);
  await Bun.write('output4.json', json4);
  
  console.log('Fitxers generats.');*/

  