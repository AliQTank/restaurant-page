import "./style.css";
// import * as divs from "./content-creation.js";
// import "./introFuncInsertr";
import { introSectionFunction, allTheContent} from "./introPage";
import { createCompanySection } from "./companyFuncInsertr"; // LINE TO INSERT COMPANY SECTION WITH OBJECT

import {buttonIntro, buttonEnterprise, buttonProducts, buttonRecipes, buttonFishDescription, buttonContact, butttonBiBliography} from "./buttonsSelector";
introSectionFunction()
// createCompanySection()
console.log("yellow!!!");


const tabswitchingLogic = () => {    
    console.log("switcher pressed");
}

const cleanAllTheContent = () => {
    for (let index = 0; index < allTheContent.children.length; index++) {
        const element = allTheContent.children[index];
        element.parentNode.removeChild(element);        
    }    
}
function destroyDiv() {
    var div = document.getElementById("level1");
    div.parentNode.removeChild(div);
  }

// NAV BUTTONS CONTROLLER
buttonIntro.addEventListener("click", () => {
    cleanAllTheContent();
    introSectionFunction();

} );

buttonEnterprise.addEventListener("click", () => {
    tabswitchingLogic();
    cleanAllTheContent();

});
buttonProducts.addEventListener("click", () => {
    tabswitchingLogic();
    cleanAllTheContent();

});
buttonRecipes.addEventListener("click", () => {
    tabswitchingLogic();
    cleanAllTheContent();

});
buttonFishDescription.addEventListener("click", () => {
    tabswitchingLogic();
    cleanAllTheContent();

});
buttonContact.addEventListener("click", () => {
    tabswitchingLogic();
    cleanAllTheContent();

});
