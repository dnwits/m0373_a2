type Direccio = {
    carrer: string;
    ciutat: string;
    codiPostal: Number;
};
type Persona={
    nom: string;
    edat: Number;
    direccio?: Direccio; //pots definir objectes sense aquest camp
};

const profe: Persona={
    nom: "Albert",
    edat: 40,
    direccio:{
        carrer: "Carrer Provençana",
        ciutat: "Hospitalet",
        codiPostal: 8901
    }
};
console.log(profe);

//interface, similar a type + deja def metodes
interface Animal{
    nom: string
    especie: string
    ferSoroll(): void;
};

const gat:Animal={
    nom: "Tiger",
    especie: "gat",
    ferSoroll(){
        console.log("Meow :3");
    }
};
const raton:Animal={
    nom: "Steve Mcqueen",
    especie: "ratón",
    ferSoroll(){
        console.log("Hiiiic!");
    }
};

console.log(gat); //objecte atributs
gat.ferSoroll(); //metode
console.log(raton);
raton.ferSoroll();

// ✅ Exercici 1:
// Crea un type anomenat Cotxe amb propietats (marca, model, any) i declara un objecte.
type Cotxe={
    marca:string,
    model:string,
    any:Number;
};
const Audi:Cotxe={
    marca:"Audi",
    model:"A1 allstreet",
    any:2024
};

// ✅ Exercici 2:
// Crea una interface anomenada Dispositiu amb propietats (nom, marca, preu) i afegeix un mètode descripcio(). Implementa un objecte portatil.
interface Dispositiu{
    nom: string,
    marca: string,
    preu: Number,
    descripcio():void;
};
const portatil:Dispositiu={
    nom:"Acer Aspire 3 15",
    marca:"Acer",
    preu: 500,
    descripcio(){
        console.log("Aquest portatil de la marca ", portatil.marca, " té un preu de ", portatil.preu);
    }
};
console.log(portatil);
portatil.descripcio();

//DEFINICIÓ ARRAYS D'Objectes
type Alumne = {
    nom: string,
    edat: Number;
};
const llistatAlumnes: Alumne[]=[
    {nom: "Roser", edat:20},
    {nom: "Toni", edat:22},
    {nom: "Mallada", edat:23}
];
console.log(llistatAlumnes[1]);
//for normal
for(const students of llistatAlumnes){
    console.log("-----");
    console.log(students);
};
//for each
llistatAlumnes.forEach(student1 => {
    console.log(student1);
});
