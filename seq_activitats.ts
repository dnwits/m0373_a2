//Calcula la mitjana aritmètica dels 5 primers valors de la llista:
const  act1: (number | null) [] = [8, 9, 4, 5, null, 6, 2, 9, null, 4, 7, 2, 3];
const array_elements_correctes = act1.slice(0,5).filter((x)=> x!=null);
let sumar = array_elements_correctes.reduce((acc,x) => acc + x,0);
const num_elements= array_elements_correctes.length;

console.log(sumar / num_elements) // 6.5

//Calcula la mitjana aritmètica dels 5 primers números de la llista (has d'ometre els valors null):
const otraLlista: (number| null) [] = [8, 9, 4, 5, null, 6, 2, 9, null, 4, 7, 2, 3];
const sinNull = otraLlista.filter(x => x!= null).slice(0,5).reduce((acc,x)=> acc + x);
// const acumulados = 
// const total = 
// console.log(sinNull/total) // 6.4
