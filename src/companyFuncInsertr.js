const valoresEnObjeto = {
    vision : "conocer y promover nuestras raíces y costumbres alimenticias, alcanzar sustento sin impactar en el medio ambiente, progreso y acreditacion, desarrollo integral de sus integrantes y colaboradores: personal y profesional.\n",
    valores : "Respetar los alimentos, el pasado, pioneros, las raices. Educar al cliente, y tener transparencia en procesos. apoyo e investigacion en cadenas autosustentables.\n",
    mision : "Establecer una base fortalecida en la cadena de suministro para brindar satisfacción en la nutrición con estándares definidos y ser referencia en el mercado, variedad de surtido para todas las posibilidades\n",
    modelo : "darle valor al producto y fomentar un consumo autosustentable\n",
    politicas : "Se prohíbe la discriminación por: Raza, Preferencias políticas, ideológicas, deportivas, sexuales, religiosas Se permiten todas las emociones bien encausadas o bien dirigidas.\n",
}
const allTheContent = document.getElementById("content");

export function createCompanySection () {
    const divcompanySectionCreater = document.createElement("div");
    divcompanySectionCreater.id = "company";
    const subdiv = document.createElement("div");
    const companySectionTitle = document.createElement("h2");
    companySectionTitle.innerText = "pez plus mariscos congelados";
    divcompanySectionCreater.appendChild(companySectionTitle);
        for (const key in valoresEnObjeto) {
            if (Object.prototype.hasOwnProperty.call(valoresEnObjeto, key)) {
                const myKey = key
                const element = valoresEnObjeto[key];
                let insideTitle = document.createElement("h3");
                let insidePtag = document.createElement("p");                
                insideTitle.innerText = myKey;
                insidePtag.innerText = element;
                subdiv.appendChild(insideTitle);
                subdiv.appendChild(insidePtag);
            }
        }
    divcompanySectionCreater.appendChild(subdiv);
    allTheContent.appendChild(divcompanySectionCreater);
}

