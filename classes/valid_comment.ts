import Ajv from "ajv"
import type { Comment } from "./comment"
import commentSchema from "./comment.json"

const response = await fetch('https://jsonplaceholder.typicode.com/comments'); //api c:
const comments: Comment[] = await response.json();//data.comments

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
