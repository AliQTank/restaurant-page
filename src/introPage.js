import {pezplusContactData} from "./contactInfo.js"
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
import pezPlusImage012 from "./TJCC3682.JPG"
import locImageCapture from "./pezPlus-locationGmaps.png"
import qrCodeLink from "./QRCODELOCATION001.png"

export const allTheContent = document.getElementById("content");


const image001 = document.createElement("img");
const image002 = document.createElement("img");
const image003 = document.createElement("img");
const image004 = document.createElement("img");
const image005 = document.createElement("img");
const image006 = document.createElement("img");
const image007 = document.createElement("img");
const image008 = document.createElement("img");
const image009 = document.createElement("img");
const image010 = document.createElement("img");
const image011 = document.createElement("img");
const logoImage = document.createElement("img");
const locNonInteractiveImage = document.createElement("img");
const qr = document.createElement("img");

image001.src = pezPlusImage001;
image002.src = pezPlusImage002;
image003.src = pezPlusImage003;
image004.src = pezPlusImage004;
image005.src = pezPlusImage005;
image006.src = pezPlusImage006;
image007.src = pezPlusImage007;
image008.src = pezPlusImage008;
image009.src = pezPlusImage009;
image010.src = pezPlusImage010;
image011.src = pezPlusImage011;
logoImage.src = pezPlusImage012;
locNonInteractiveImage.src = locImageCapture;
qr.src = qrCodeLink;

export function introSectionFunction () {
    let introSectionTitle = document.createElement("h1");
    let introSecSubTitle = document.createElement("h2");
    let locationInfoPara1 = document.createElement("p");
    let locationInfoPara2 = document.createElement("p");
    let contactPhonePara = document.createElement("p");
    let contactDirectToMail = document.createElement("p");
    let link2GMaps = document.createElement("a");
    let divIntroCard = document.createElement("div");
    let divIntroTop = document.createElement("div");
    let divIntroBottom = document.createElement("div");
    let divIntroBottomLeftSide = document.createElement("div");
    let divIntroBottomRightSide = document.createElement("div");
    divIntroCard.id = "intro";
    divIntroBottom.id = "img-and-contact-info";
    divIntroBottomLeftSide.id = "intro-bottom-left";
    divIntroBottomRightSide.id = "intro-bottom-right";
    introSectionTitle.innerText = "pez plus";
    introSecSubTitle.innerText = "pescados y mariscos";
    locationInfoPara1.innerText = `${pezplusContactData.avenida}, ${pezplusContactData.colonia}`;
    locationInfoPara2.innerText = `${pezplusContactData.cp} ${pezplusContactData.municipio}`;
    contactPhonePara.innerText = `${pezplusContactData.letefono}`;
    link2GMaps.href = `${pezplusContactData.googlemapsLink}`;
    link2GMaps.target = "_blank";
    // link2GMaps.innerText = "how do i get there?"
    link2GMaps.appendChild(locNonInteractiveImage)
    divIntroTop.appendChild(introSectionTitle);
    divIntroTop.appendChild(introSecSubTitle);
    // divIntroBottom.appendChild(image001);
    // divIntroBottom.appendChild(image002);
    // divIntroBottom.appendChild(image003);
    // divIntroBottom.appendChild(image004);
    // divIntroBottom.appendChild(image005);
    // divIntroBottom.appendChild(image006);
    // divIntroBottom.appendChild(image007);
    // divIntroBottom.appendChild(image008);
    // divIntroBottom.appendChild(image009);
    // divIntroBottom.appendChild(image010);
    divIntroBottomLeftSide.appendChild(image009);
    divIntroBottomRightSide.appendChild(link2GMaps);
    divIntroBottomRightSide.appendChild(qr);
    divIntroBottomRightSide.appendChild(locationInfoPara1);
    divIntroBottomRightSide.appendChild(locationInfoPara2);
    divIntroBottomRightSide.appendChild(contactPhonePara);
    divIntroBottom.appendChild(divIntroBottomLeftSide);
    divIntroBottom.appendChild(divIntroBottomRightSide);
    divIntroCard.appendChild(divIntroTop);
    divIntroCard.appendChild(divIntroBottom);
    allTheContent.appendChild(divIntroCard);
    
}
