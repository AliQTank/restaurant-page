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

/*  P CREATIONS FOR INTRO SECTION*/
const paraProducts = document.createElement("p");

/*  P TEXT FOR INTRO SECTION*/
pIntroVision.innerText= `VISION: Conectar con nuestras raíces alimenticias \n 
                        Aquí no es casa de asistencia, ni albergue, se busca dar ayuda a personas con \n
                        capacidades de desarrollo personales y de la empresa, se apoya a quien
                        tiende a lo justo y a lo honesto.`;
pIntroValues.innerText = `VALORES: Respetar los alimentos, el pasado, pioneros, las raices. Educar
                        al cliente Transparencia en procesos, Cadenas autosustentables`;
pIntroMission.innerText = `MISION: Establecer una base fortalecida en la cadena de suministro para
                        brindar satisfacción en la nutrición con estándares definidos y ser
                        referencia en el mercado, variedad de surtido para todas las
                        posibilidades`;
pIntroModel.innerText = `MODELO darle valor al producto y fomentar un consumo autosustentable`;
pIntrodiscrPolicies.innerText = `Se prohíbe la discriminación por: Raza, Preferencias políticas,
                        ideológicas, deportivas, sexuales, religiosas Se permiten todas las
                        emociones, sin embargo tienen que ser bien encausadas o bien dirigidas.`
/*  P APPENDS FOR INTRO SECTION*/
introCreation.appendChild(pIntroVision);
introCreation.appendChild(pIntroValues);
introCreation.appendChild(pIntroMission);
introCreation.appendChild(pIntroModel);

/* DIVS BINDING TO BODY ELEMENT*/
document.body.appendChild(introCreation);
document.body.appendChild(productsSection);
document.body.appendChild(recipesAndMore);
document.body.appendChild(contactSection);

export {introCreation, productsSection, recipesAndMore, contactSection};