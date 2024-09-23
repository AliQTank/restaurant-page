import { valoresEnObjeto} from "./introdetails";
function createIntroSection () {
    const divIntroCreater = document.createElement("div");
    divIntroCreater.id = "tobeputproduct";
    const introSectionTitle002 = document.createElement("h2");
    introSectionTitle002.innerText = "intro section v2";
    divIntroCreater.appendChild(introSectionTitle002);
        for (const key in valoresEnObjeto) {
            if (Object.prototype.hasOwnProperty.call(object, key)) {
                const element = object[key];
                let insideTitle = document.createElement("h2");
                let insidePtag = document.createElement("p");                
                insideTitle.innerText = key;
                insidePtag.innerText = element;

            }
        }
}