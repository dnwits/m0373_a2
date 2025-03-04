// conectar al API REST
/* PROVA --> PAS 1 SENSE TYPE DEFINITS
const response = await fetch('https://jsonplaceholder.typicode.com/users'); //api c:
const users = await response.json();

console.log(users.map((user: {name:string}) => user.name));*/

//PAS 2 TYPE DEFINITS PREVIAMENT
import type { User } from "./typicode";

const response = await fetch('https://jsonplaceholder.typicode.com/users'); //api c:
const users: User[] = await response.json();

console.log(users.map(user=> user.company.name));