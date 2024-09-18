// import "./introdetails.js"
import { productsArray, visMisValModIdeas } from "./introdetails.js";
// import "recipesDescription.js"
// import {recipesTutorial} from "./recipesObject.js"
import * as recipes from "./recipesObject.js"
// 
import * as description from "./fishDescription.js"
/** DIVS SECTIONS */
const introCreation = document.createElement("div");
const productsSection = document.createElement("div");
const recipesAndMore = document.createElement("div");
const fishdescriptions = document.createElement("div");
const contactSection = document.createElement("div");

/** INTRO SECTION TITLE */
const introSectionTitle = document.createElement("h2");
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
const productSectionTitle = document.createElement("h2");
productSectionTitle.innerText = "product section starts here";
productsSection.appendChild(productSectionTitle);


// /*  UNORDERED LIST CREATIONS FOR PRODUCTS SECTION*/
const productsList =  document.createElement("ul");

/* LIST INSERTION FUNCTION */
(function productsListInserter() {
    for (const element of productsArray) {
        let newLine = document.createElement("li");
        newLine.innerText = element;
        productsList.appendChild(newLine);                
    }
    
})()
productsSection.appendChild(productsList);

/* RECIPES SECTION TITLE */
const recipesSectioTitle = document.createElement("h2");
recipesSectioTitle.innerText = "recipes";
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
})()
recipesAndMore.appendChild(recipesList);

/** FISHES GENERAL DESCRIPTION */
const fishdescriptionsTitle = document.createElement("h2");
fishdescriptionsTitle.innerText = "fishes description starts here";
fishdescriptions.appendChild(fishdescriptionsTitle);

/**CREATE A FUNCTION TO GENERATE A PARAGRAPH FOR EVERY FOR EVERY ARGUMENT */
(function fishdescriptionParagrahCreator(objectBriefing) {
    for (const key in objectBriefing) {
        if (Object.prototype.hasOwnProperty.call(objectBriefing, key)) {
            const element = objectBriefing[key];
            let subtitle = document.createElement("h4");
            let paraDescription = document.createElement("p");
            // subtitle.innerText = Object.defineProperty(element);
            paraDescription.innerText = element
            fishdescriptions.appendChild(subtitle);
            fishdescriptions.appendChild(paraDescription);                        
        }
    }
})(description.atunInfo)


/* CONTACT SECTION TITLE */
const contactSectionTitle = document.createElement("h2");
contactSectionTitle.innerText = "contact section starts her";
contactSection.appendChild(contactSectionTitle);

/* DIVS BINDING TO BODY ELEMENT*/
document.body.appendChild(introCreation);
document.body.appendChild(productsSection);
document.body.appendChild(recipesAndMore);
document.body.appendChild(fishdescriptions);
document.body.appendChild(contactSection);

export {introCreation, productsSection, recipesAndMore, fishdescriptions,contactSection};