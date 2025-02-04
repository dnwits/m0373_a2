const mike: any = {}; //objecte :3

console.log(mike.name);
mike.name="Meow";
console.log(mike.name);

const mallada: any = {
    name: "Albert", //key: valor
    cognom: "Mallada",
    email: "amallada@xtec.cat"
}
console.log(mallada)
console.log(mallada.name);
console.log(mallada.cognom);
console.log(mallada.email);

//per obtenir les claus de cada camp es pot cridar a Object.keys
console.log(Object.keys(mallada));

//per obtenir els valor de tots els camps Object.entrie
console.log(Object.entries(mallada));
console.log(mallada["cognom"]);

//nou atribut
mallada.edat = 30;

for(const clau in mallada){ //obtinc les claus i despres els valors
    console.log(mallada[clau]) //mallada[clau] or clau
}

//exercici 1
// Crea un objecte user buit.
const user: any = {};
// Afegeix la propietat name amb el valor John.
user.name = "John";
// Afegeix la propietat surname amb el valor Smith
user.surname= "Smith";
// Modifica el valor de name a Pete.
user.name= "Pete";
// Afegir adreça
user.adreca= "Carrer algo, 70"
//mostrar valors obj user
for(const key in user){
    console.log(user[key])
}

//exercici 2
const salaries:any = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let result:number=0;
for(const key in salaries){
    result+=salaries[key];
}
console.log(result)

