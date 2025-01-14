/* Cost
Crea un script cost.ts que:

Demani les dimensions en centímetres d'una capsa
Calculi el volume de la capsa en centémetres.
Calculi el cost d'enviar la capsa en funció del volume: 1 euro cada 5000 cm2
Mostri por consola el cose en euros d'enviar aquesta capsa.
A continuació tens un exemple d'una capsa de 23 x 45 x 10 que té un coste de envío de 2.07€ :

$  bun .\cost.ts
Llargada:  23
Amplada:  24
Altura:  56
Cost: 6.1824 €*/
console.log("Dimensions de la capsam en cm:");
let llargada = Number(prompt("Introdueixi la llargada: "));
let amplada = Number(prompt("Introdueixi l'amplada: "));
let altura = Number(prompt("Introdueixi l'altura: "));

const volum = llargada * amplada * altura;
const cost = volum / 5000

alert("Cost: ${cost} €")