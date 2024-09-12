// import "./introdetails.js"
import { productsArray, visMisValModIdeas } from "./introdetails.js";
// import "recipesDescription.js"
// import {recipesTutorial} from "./recipesObject.js"
import * as recipes from "./recipesObject.js"
/** DIVS SECTIONS */
const introCreation = document.createElement("div");
const productsSection = document.createElement("div");
const recipesAndMore = document.createElement("div");
const contactSection = document.createElement("div");

/** INTRO SECTION TITLE */
const introSectionTitle = document.createElement("h3");
introSectionTitle.innerText = "intro section starts here";
introCreation.appendChild(introSectionTitle);

/*  P CREATIONS FOR INTRO SECTION*/
const pIntroVision = document.createElement("p");
const pIntroValues = document.createElement("p");
const pIntroMission = document.createElement("p");
const pIntroModel = document.createElement("p");
const pIntrodiscrPolicies = document.createElement("p");

/* P TEXT FOR INTRO SECTION*/
pIntroVision.innerText = visMisValModIdeas[0];
pIntroValues.innerText = visMisValModIdeas[1];
pIntroMission.innerText = visMisValModIdeas[2];
pIntroModel.innerText = visMisValModIdeas[3];
pIntrodiscrPolicies.innerText = visMisValModIdeas[4];

/* P APPENDS FOR INTRO SECTION*/
introCreation.appendChild(pIntroVision);
introCreation.appendChild(pIntroValues);
introCreation.appendChild(pIntroMission);
introCreation.appendChild(pIntroModel);

/* PRODUCT SECTION TITLE */
const productSectionTitle = document.createElement("h3");
productSectionTitle.innerText = "product section starts here";
productsSection.appendChild(productSectionTitle);


// /*  UNORDERED LIST CREATIONS FOR PRODUCTS SECTION*/
const productsList =  document.createElement("ul");

/* LIST INSERTION FUNCTION */
(function productsListInserter() {
    for (const element of productsArray) {
        let newLine = document.createElement("li");
        newLine.innerHTML = element;
        productsList.appendChild(newLine);                
    }
    
})()
productsSection.appendChild(productsList);

/* RECIPES SECTION TITLE */
const recipesSectioTitle = document.createElement("h3");
recipesSectioTitle.innerText = "recipes section starts here";
recipesAndMore.appendChild(recipesSectioTitle);

/* RECIPES DESCRIPTION */

/* UNORDERED LIST CREATED TO ENLIST ALL THE RECIPES */
const recipesList = document.createElement("ul");

/* LIST INSERTION FOR RECIPES */
(function recipesForIn() {
    for (const key in recipes.recipesTutorial) {
        if (Object.prototype.hasOwnProperty.call(recipes.recipesTutorial, key)) {
            const element = recipes.recipesTutorial[key];
            let newLine = document.createElement("li");
            newLine.innerText = element.nombre;
            recipesList.appendChild(newLine);
        }
    }

})()

// (function recipesInstructions() {
//     for (const signleRecipe of recipes.recipesTutorial) {
//         let newLine = document.createElement("li");
//         newLine.innerHTML = signleRecipe;
//         recipesList.appendChild(newLine);
//         // if (signleRecipe.nombre) {
//         // }
//     }
// })()
recipesAndMore.appendChild(recipesList);


/* CONTACT SECTION TITLE */
const contactSectionTitle = document.createElement("h3");
contactSectionTitle.innerText = "contact section starts here";
contactSection.appendChild(contactSectionTitle);

/* DIVS BINDING TO BODY ELEMENT*/
document.body.appendChild(introCreation);
document.body.appendChild(productsSection);
document.body.appendChild(recipesAndMore);
document.body.appendChild(contactSection);

export {introCreation, productsSection, recipesAndMore, contactSection};