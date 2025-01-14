/*1.- ¿Cuáles son los valores de a y x después del código a continuación?
let a = 2 //a--> 2
a *= 2 //a--> 2*2 =4
let x = 1 + a //x--> 1+4= 5
*/
//2.- A continuació tens un codi que demana a l'ususari dos nombres i mostra la suma. Té un error, arregla el codi.

let a = prompt("¿Primer número?")
let b = prompt("¿Segundo número?")
//convertir los prompts de posibes null a tipo numerico
console.log(Number(a) + Number(b))

//Para calcular el area de un círculo debes utilitzar la fórumla πr², donde r es el radio del círculo y π és el número Pi.
// Calcula l'area d'un cercle de diametre 5:
//let diametre = 5;
//let radi = diametre/2;
let pi = 3.141592653;

let radi = Number(prompt("Introduexi el radi del cercle?:" ))
let area= pi*(radi ** 2);

console.log("L'area del cercle amb diametre de "+radi+" es "+ area);
