import Ajv from "ajv"
import type { Recipes } from "./dummyjson"
import recipeSchema from "./dummyrecipes.json"

const response = await fetch('https://dummyjson.com/recipes')
const data = await response.json()
const recipes: Recipes[] = data.recipes

const ajv = new Ajv();
const validateRecipe = ajv.compile(recipeSchema);
recipes.forEach(recipe =>{
    const valid = validateRecipe(recipe) //true or false
    if(!valid){
        console.log("Errors ", validateRecipe.errors);
    } else {
        console.log("Recepta: ",recipe.id," -> ",recipe.name);
    }
})
