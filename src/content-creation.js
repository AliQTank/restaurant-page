import "./introdetails.js"
import { productsArray, visMisValModIdeas } from "./introdetails.js";
/** DIVS SECTIONS */
const introCreation = document.createElement("div");
const productsSection = document.createElement("div");
const recipesAndMore = document.createElement("div");
const contactSection = document.createElement("div");

/*  P CREATIONS FOR INTRO SECTION*/
const pIntroVision = document.createElement("p");
const pIntroValues = document.createElement("p");
const pIntroMission = document.createElement("p");
const pIntroModel = document.createElement("p");
const pIntrodiscrPolicies = document.createElement("p");

/*  P TEXT FOR INTRO SECTION*/
pIntroVision.innerText = visMisValModIdeas[0];
pIntroValues.innerText = visMisValModIdeas[1];
pIntroMission.innerText = visMisValModIdeas[2];
pIntroModel.innerText = visMisValModIdeas[3];
pIntrodiscrPolicies.innerText = visMisValModIdeas[4];

/*  P APPENDS FOR INTRO SECTION*/
introCreation.appendChild(pIntroVision);
introCreation.appendChild(pIntroValues);
introCreation.appendChild(pIntroMission);
introCreation.appendChild(pIntroModel);

// /*  LIST CREATIONS FOR PRODUCTS SECTION*/
const productsList =  document.createElement("ul");
const productSectionTitle = document.createElement("h3");
productSectionTitle.innerText = "product section starts here";
productsSection.appendChild(productSectionTitle);

/* LIST INSERTION FUNCTION */
(function listInserter() {
    for (const element of productsArray) {
        let newLine = document.createElement("li");
        newLine.innerHTML = element;
        productsList.appendChild(newLine);                
    }
    
})()
productsSection.appendChild(productsList);

/* DIVS BINDING TO BODY ELEMENT*/
document.body.appendChild(introCreation);
document.body.appendChild(productsSection);
document.body.appendChild(recipesAndMore);
document.body.appendChild(contactSection);

export {introCreation, productsSection, recipesAndMore, contactSection};