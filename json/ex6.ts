import { readFile } from "./jugadors.json";

async function mostrarJugadors() {
  try {
    const data = await readFile("jugadors.json", "utf-8");
    const jugadors = JSON.parse(data);

    console.log("Jugadors carregats des del fitxer JSON:");
    console.table(jugadors);

    return jugadors;
  } catch (error) {
    console.error("Error al llegir el fitxer JSON:", error);
  }
}

mostrarJugadors();
