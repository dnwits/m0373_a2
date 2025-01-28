/*let name = "Val";
console.log(`Hola, et dius ${name}`);
console.log(`una suma --> ${2+3}`);
console.log(`el num 2 elevat a 3 és --> ${2**3}`);*/

//if en una sola linea
/*let age1 = Number(prompt("Quina edat tens? ","0"));
let result:string;
if(age1>18){
    result="Ets major d'edat";
} else {
    result="Ets menor d'edat";
}
console.log(result);

let result2=(age1>18) ? "tienes más de 18 xd" : "eres menor de edad";
console.log(result2);*/

/*let age3 = Number(prompt('¿edad?', "18"))

let message =
    (age3 < 3) ? '¡Hola, vas a infantil!' :
        (age3 < 16) ? 'aun vas a la ESO!' :
            (age3 < 20) ? 'xx' :
                (age3 < 100) ? '¡Felicidades!' :
                    '¡Qué edad tan inusual!'

console.log(message);*/

/*let a = 5
let b = 8 
let result: string
result=(a+b<4)? 'Debajo :3' : 'Encima :3';
console.log(result)



let login :string | null = prompt('Tipo de trabajador? ')
let message;
if (login == 'Empleado') {
  message = 'Hola'
} else if (login == 'Director') {
  message = 'Felicidades'
} else if (login == null) {
  message = 'Sin sesión'
} else {
  message = ''
}
console.log(message)
message=
    (login== 'Empleado')? 'Hola':
        (login == 'Director')? 'Felicidades':
            (login == null)? 'Sin sesión': '...'
console.log(message);*/

//Escribe una condición if para comprobar que age NO está entre 40 y 60 inclusive.
//Crea dos variantes: la primera usando NOT !, y la segunda sin usarlo.
/*let age22 = 30;
let mensaje;

let resultado=(!(age22<40 && age22>60))? 'edad correcta' : 'fuera de rango';
console.log(resultado);*/


//VALOR NaN
/*let i=0;
while (i!=-1) {
    let numString = prompt("nuevo número: ")
    i = Number(numString);
    console.log(i);
}*/


//generar numeros aleatorios
/*let x = Math.random()*10;
x= Math.floor(x); //redondear
console.log(x);*/

//Crea un programa que pregunti a l'usuari adivinar un número del 1 al 100, i li digui si ha acertat, o el número és més gran o més petit.
let num;
let numUser;
let coincide;

do {
    numUser = Number(prompt("Escoga un numero del 1 al 10: "))
    num = Math.random()*10+1;
    num=Math.floor(num);
    
    if (numUser==num){
        coincide=true
        console.log("el numero ha coincidido :3 ", num)
    } else{
        coincide= false
    }
} while (coincide);