import Ajv from "ajv"
import type { Recipes } from "./dummyjson"
import recipeSchema from "./dummyrecipes.json"

const response = await fetch('https://dummyjson.com/recipes')
const data = await response.json()
const recipes: Recipes[] = data.recipes

const ajv = new Ajv();
const validateUser = ajv.compile(recipeSchema);
recipes.forEach(user =>{
    const valid = validateUser(user) //true or false
    if(!valid){
        console.log("Errors ", validateUser.errors);
    } else {
        console.log(user.name);
    }
})
