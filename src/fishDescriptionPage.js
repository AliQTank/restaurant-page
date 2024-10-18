import { allTheContent } from "./introPage";

export function fishDescriptionSectionInserter() {
    const divFishDescSection = document.createElement("div");
    divFishDescSection.id = "descriptions";
    const fishdescriptionsTitle = document.createElement("h2");
    fishdescriptionsTitle.innerText = "fishes description starts here";
    const fishDescriptionPara = document.createElement("p");
    fishDescriptionPara.innerText = "whatapp!"
    divFishDescSection.appendChild(fishdescriptionsTitle);
    divFishDescSection.appendChild(fishDescriptionPara);
    allTheContent.appendChild(divFishDescSection);
}