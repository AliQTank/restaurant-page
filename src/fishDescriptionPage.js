import { allTheContent } from "./introPage";
import {introFishDetails, mainObject} from "./fishDescription"

export function fishDescriptionSectionInserter() {
    const divFishDescSection = document.createElement("div");
    divFishDescSection.id = "descriptions";
    const subdiv = document.createElement("div");
    const fishdescriptionsTitle = document.createElement("h2");
    fishdescriptionsTitle.innerText = introFishDetails.info_general;
    const fishDescriptionPara = document.createElement("p");
    fishDescriptionPara.innerText = "whatapp!"
    divFishDescSection.appendChild(fishdescriptionsTitle);
    divFishDescSection.appendChild(fishDescriptionPara);
    for (const key in introFishDetails) {
        if (Object.prototype.hasOwnProperty.call(introFishDetails, key)) {
            const myKey = key
            const element = introFishDetails[key];
            let insideTitle = document.createElement("h3");
            let insidePtag = document.createElement("p");                
            insideTitle.innerText = myKey;
            insidePtag.innerText = element;
            subdiv.appendChild(insideTitle);
            subdiv.appendChild(insidePtag);
        }
    }
    divFishDescSection.appendChild(subdiv);
    allTheContent.appendChild(divFishDescSection);
}