type Persona = {
    nom: string;
    edat: number;
};
//indicar la ruta relativa como a html
const persones: Persona[]= await Bun.file("./persona.json").json();
persones.forEach((persona, index) =>{
    console.log(`Persona ${index + 1}: Nom: ${persona.nom}, Edat: ${persona.edat}`)
});
