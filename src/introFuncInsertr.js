const valoresEnObjeto = {
    vision : `Conectar con nuestras raíces alimenticias, alcanzar sustento sin impacto en el medio ambiente,  
                        progreso y acreditacion, desarrllo integral personal y profesionales.\n`,
    valores : `Respetar los alimentos, el pasado, pioneros, las raices. Educar
                        al cliente, y tener transparencia en procesos. apoyo e investigacion en cadenas autosustentables`,
    mision : `Establecer una base fortalecida en la cadena de suministro para
                        brindar satisfacción en la nutrición con estándares definidos y ser
                        referencia en el mercado, variedad de surtido para todas las
                        posibilidades`,
    modelo : `darle valor al producto y fomentar un consumo autosustentable`,
    politicas : `Se prohíbe la discriminación por: Raza, Preferencias políticas,
                    ideológicas, deportivas, sexuales, religiosas Se permiten todas las
                    emociones bien encausadas o bien dirigidas.`,

}

function createIntroSection () {
    const divIntroCreater = document.createElement("div");
    divIntroCreater.id = "products";
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