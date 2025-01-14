console.log("hello world :3");
let meow: string;
//comentarios 
meow= "los gatos dicen meow";
console.log(meow);
/* o con esto */
let age = prompt ("¿Cuántos años tienes?", "18");
console.log(age);
//alert('Tienes {age} años!') //Tienes 100 años!
let continuar = confirm("Estas seguro de tu edad: ");
console.log(continuar);

//preguntar que tipo de dato recoge las variables
console.log(typeof continuar); //boolean
console.log(typeof age); //string

//para convertir edat numerico en lugar de string
let ageNumerico= Number(age);
let suma = ageNumerico + 10;
console.log("En 10 años tendrás "+suma+" :3");

