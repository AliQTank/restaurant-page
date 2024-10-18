import { allTheContent } from "./introPage";
import { productsArray } from "./introdetails";

export function productsInserter() {
    const divProductsSectionCreator = document.createElement("div");
    divProductsSectionCreator.id = "products";
    const productSectionTitle = document.createElement("h2");
    productSectionTitle.innerText = "Productos";
    divProductsSectionCreator.appendChild(productSectionTitle);
    const productsList =  document.createElement("ul");
    
        for (const element of productsArray) {
            let newLine = document.createElement("li");
            newLine.innerText = element;
            productsList.appendChild(newLine);                
        }
    divProductsSectionCreator.appendChild(productsList);
    allTheContent.appendChild(divProductsSectionCreator);        
}