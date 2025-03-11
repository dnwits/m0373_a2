import Ajv from "ajv" //importar avj para la validación
import type { Comment } from "./comment" //imp de la clase Comment
import commentSchema from "./comment.json" //imp els schema autogenerado

const response = await fetch('https://jsonplaceholder.typicode.com/comments'); //api con los datos
const comments: Comment[] = await response.json(); //esperar a que responda

const ajv = new Ajv();
const validateComment = ajv.compile(commentSchema);
comments.forEach(comment =>{
    const valid = validateComment(comment) //true or false
    if(!valid){
        console.log("Errors ", validateComment.errors);
    } else {
        console.log("Comentari de: ", comment.name);
    }
});

