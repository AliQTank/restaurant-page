import { allTheContent } from "./introPage";
import {introFishDetails, mainObject} from "./fishDescription"

export function fishDescriptionSectionInserter() {
    const divFishDescSection = document.createElement("div");
    divFishDescSection.id = "descriptions";
    const subdiv = document.createElement("div");
    const fishdescriptionsTitle = document.createElement("h2");
    fishdescriptionsTitle.innerText = "titulo de informacion de productos";
    const fishDescriptionPara = document.createElement("p");
    fishDescriptionPara.innerText = "parrafo de informacion general de productos"
    divFishDescSection.appendChild(fishdescriptionsTitle);
    divFishDescSection.appendChild(fishDescriptionPara);
    for (const key in introFishDetails) {
        if (Object.prototype.hasOwnProperty.call(introFishDetails, key)) {
            const myKey = key;
            const element = introFishDetails[key];
            let insideTitle = document.createElement("h3");
            let insidePtag = document.createElement("p");                
            insideTitle.innerText = myKey;
            insidePtag.innerText = element;
            subdiv.appendChild(insideTitle);
            subdiv.appendChild(insidePtag);
        }
    }
    const fishDescriptionList = document.createElement("ul");
    for (const key in mainObject) {
        if (Object.prototype.hasOwnProperty.call(mainObject, key)) {
            const myKey = key;
            const element = mainObject[key];
            let newLine = document.createElement("li");
            let fshDescriptionSubtitle = document.createElement("p");
            let fishDescriptionPara = document.createElement("p");
            fshDescriptionSubtitle.innerText = element.nombre;
            fishDescriptionPara.innerText = element;
            newLine.appendChild(fshDescriptionSubtitle);
            newLine.appendChild(fishDescriptionPara);
            fishDescriptionList.appendChild(newLine);            
        }
    }
    
    subdiv.appendChild(fishDescriptionList);
    divFishDescSection.appendChild(subdiv);
    allTheContent.appendChild(divFishDescSection);
}