import { allTheContent } from "./introPage";
import * as recipes from "./recipesObject.js"

export function recipesInserter() {
    const divRecipesSectionCreator = document.createElement("div");
    divRecipesSectionCreator.id = "recipes";
    const recipesSectioTitle = document.createElement("h2");
    recipesSectioTitle.innerText = "recipes title";
    divRecipesSectionCreator.appendChild(recipesSectioTitle);
    const recipesList = document.createElement("ul");
        for (const key in recipes.recipesTutorial) {
            if (Object.prototype.hasOwnProperty.call(recipes.recipesTutorial, key)) {
                const element = recipes.recipesTutorial[key];
                let newLine = document.createElement("li");
                let recipeNameTagP = document.createElement("h3");
                let ingredientsTagP = document.createElement("p");
                let preparationsPag = document.createElement('p'); 
                recipeNameTagP.innerText = element.nombre;
                ingredientsTagP.innerText = element.ingredientes.join(", ").toString();
                preparationsPag.innerText = element.preparacion;
                newLine.appendChild(recipeNameTagP);
                newLine.appendChild(ingredientsTagP);
                newLine.appendChild(preparationsPag);
                recipesList.appendChild(newLine);
            }
        }
    
    divRecipesSectionCreator.appendChild(recipesList);
    allTheContent.appendChild(divRecipesSectionCreator);
}