interface Game {
    name: string;
    preu: number;
    plataformes: string[]; }
const jsonGame: string = '{"name":"Mario Party","preu":20.35,"plataformes":["WII","Switch","PS5"]}';
const objecteGame: Game = JSON.parse(jsonGame);
console.log(objecteGame);

interface Assignatura {
    nom : string;
    cicle : string;
    hores_duracio : number;
}
// const jsonEstudiant: string = '{"nom": "Ed","edat": 20,"assignatures": ["Programació", "Sistemes informàtics", "Llenguatge de marques"]}';
// const objecteEstudiant: Assignatura = JSON.parse(jsonEstudiant);
// console.log(objecteEstudiant);

interface Estudiant2 {
    nom : string;
    edat : number;
    tipus: string;
    assignatures : Assignatura[];
}
const jsonEstudiant2: string = '{"nom":"Robert","edat":20,"tipus":"Grau Superior","assignaturtes":[{"nom":"Programació","cicle":"DAM-1","hores_duracio":300},{"nom":"Sistemes informàtics","cicle":"DAM-1","hores_duracio":180},{"nom":"Llenguatge de marques","cicle":"DAM-1","hores_duracio":230}]}';
const objecteEstudiant2: Estudiant2 = JSON.parse(jsonEstudiant2);
console.log(objecteEstudiant2);