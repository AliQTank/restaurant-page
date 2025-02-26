// import "./introdetails.js"
import { productsArray, visMisValModIdeas } from "./introdetails.js";
import {pezplusContactData} from "./contactInfo.js"
// import "recipesDescription.js"
// import {recipesTutorial} from "./recipesObject.js"
import * as recipes from "./recipesObject.js"
// 
import * as description from "./fishDescription.js"

import pezPlusImage001 from "./IMG_0150.JPG"
import pezPlusImage002 from "./IMG_0151.JPG"
import pezPlusImage003 from "./IMG_0152.JPG"
import pezPlusImage004 from "./IMG_0153.JPG"
import pezPlusImage005 from "./IMG_0154.JPG"
import pezPlusImage006 from "./IMG_0346.JPG"
import pezPlusImage007 from "./IMG_0348.JPG"
import pezPlusImage008 from "./IMG_0349.JPG"
import pezPlusImage009 from "./IMG_0350.JPG"
import pezPlusImage010 from "./IMG_0351.JPG"
import pezPlusImage011 from "./IMG_0352.JPG"
import qrCodeLocation from "./QRCODELOCATION001.png"
import logoImage001 from "./TJCC3682.JPG"
/** DIVS SECTIONS */
const allTheContent = document.getElementById("content");

const introCreation = document.createElement("div");
const productsSection = document.createElement("div");
const recipesAndMore = document.createElement("div");
const fishdescriptions = document.createElement("div");
const contactSection = document.createElement("div");
introCreation.id = "intro";
productsSection.id = "products";
fishdescriptions.id = "descriptions";
recipesAndMore.id = "recipes";
contactSection.id = "contact";

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
productSectionTitle.innerText = "Productos";
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

/**CREATE A FUNCTION TO GENERATE A PARAGRAPH FOR ARGUMENT */
(function fishdescriptionParagrahCreator(objectBriefing) {
    for (const key in objectBriefing) {
        if (Object.prototype.hasOwnProperty.call(objectBriefing, key)) {
            const myKey = key;
            const element = objectBriefing[key];
            let subtitle = document.createElement("h4");
            let paraDescription = document.createElement("p");
            subtitle.innerText = myKey;
            paraDescription.innerText = element
            fishdescriptions.appendChild(subtitle);
            fishdescriptions.appendChild(paraDescription);                        
        }
    }
})(description.doradoInfo)


/* CONTACT SECTION TITLE */
const contactSectionTitle = document.createElement("h2");
contactSectionTitle.innerText = "contact section starts here";
contactSection.appendChild(contactSectionTitle);

/* CONTACT SECTION IMAGES APPENDING */
const qrImage = document.createElement("img");
const logoImage = document.createElement("img");
qrImage.src = qrCodeLocation;
logoImage.src = logoImage001;
contactSection.appendChild(qrImage);
contactSection.appendChild(logoImage);

/**CONTACT SECTION LOCATION APPEND */
const pLocationInfo = document.createElement("p");
pLocationInfo.innerText = `${pezplusContactData.avenida}, ${pezplusContactData.colonia}, ${pezplusContactData.municipio}`;
contactSection.appendChild(pLocationInfo);
/* DIVS BINDING TO BODY ELEMENT*/
allTheContent.appendChild(introCreation);
allTheContent.appendChild(productsSection);
allTheContent.appendChild(recipesAndMore);
allTheContent.appendChild(fishdescriptions);
allTheContent.appendChild(contactSection);

export {introCreation, productsSection, recipesAndMore, fishdescriptions,contactSection};