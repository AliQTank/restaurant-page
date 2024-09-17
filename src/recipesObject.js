import * as resDescr from './recipesDescription.js'
import {preparacionCaldo} from './recipesDescription.js'

export const vegetales ={
    apio : "apio",
    aguacate : "aguacate",
    calabaza : "calabaza",
    cebolla : {blanca : "cebolla",morada :"cebolla morada", amarilla : "cebolla amarilla"},
    elote : "elote",
    papa : "papa",
    pepino : "pepino",
    tomate : "tomate",
    zanahoria : "zanahoria",
    chayote : "chayote",
}

export const frutos = {
    mango : "mango",
    manzana : "manzana",
    platano : "platano",
    arandano : "arandano",
    pera : "pera",
    melon : "melón",
    sandia : "sandia",
}

export const proteina = {
    almeja : {chirla : "almeja chirla", chocolata : "almeja chocolata"},
    atun : "atun",
    camaron : "camaron",
    calamar : "calamar",
    callo : {almeja : "callo de almeja", acha : "callo de acha"},
    huevo : "huevo",
    manta : "manta",
    pescado : {entero : "pescado entero", lonja : "lonja de pescado", filete : "filete de pescado", molida : "molida de pescado"},
    pulpo : "pulpo",
    salmon : "salmon",    
    sopa : "sopa de mariscos",
    surimi : "surimi",
}

export const camarones = {
    "sin cabeza" : {
        "16 20" : "16 20",
        "21 25" : "21 25",
        "26 30" : "26 30",
        "31 35" : "31 35",
        "36 40" : "36 40",
        "41 50" : "41 50",
        "51 60" : "51 60",
        "61 70" : "61 70",
        "71 90" : "71 90",
        "91 110" : "91 110",
    },
    "con cabeza" : {
        "20 30" : "20 30",
        "30 40" : "30 40",
        "40 50" : "40 50",
        "50 60" : "50 60",
        "60 70" : "60 70",
        "70 90" : "70 90",
    },
}

export const pescados = {
    pargo : {blanco :"pargo blanco", rojo :"pargo rojo", alazan : "pargo alazan", raicero : "pargo raicero", pierna : "pargo pierna", mero: "pargo mero", general : "pargo"},
    mojarra : {plateada: "mojarra plateada", gris: "mojarra gris", lobina: "lobina", general : "mojarra"},
    cazon : {cazon: "cazon", guitarra: "guitarra", tripa: "tripa", manzanillo: "manzanillo", bironcho: "bironcho", tiburon: "tiburon", angelito: "cazon angelito", general : "cazon"},
    curvina : {aletaBlanca: "curvina aleta blanca", aletaAmarilla: "curvina aleta amarilla", golfina : "curvina golfina", general : "curvina"},
    huachinango : {deOrden: "huachinango de orden", chico: "huachinango chico", general : "huachinango"},
    bagre : {bandera: "bagre bandera", chihuil : "bagre chihuil", basa : "filete de basa", rodajas : "rodajas de bagre", general : "bagre"},
    dorado : {general : "dorado"},
    robalo : {general : "robalo"},

}

export const condimentosYPicantes = {
    ajo : "ajo",
    cilantro : "cilantro",
    chile : {chiltepin : "chile chiltepin", serrano : "chile serrano", habanero : "chile habanero", jalapeño : "chile jalapeño",},
    empanizador : "empanizador",
    harina : "harina",
    knor : "knor",
    mayonesa : "mayonesa",
    miel : "miel",
    pimienta : "pimienta",
    romero : "romero",
    sal : "sal",
    salsas : {salsaInglesa : "salsa inglesa", salsaMaggi : "salsa maggi", salsaSoya : "salsa soya"},
    tomillo : "tomillo",
}

export const grasas = {
    crema : "crema",
    queso : "queso",
    leche : "leche",
    aceite : {oliva : "aceite de oliva", soya : "aceite de soya", maiz : "aceite de maiz", ajonjoli : " aceite de ajonjoli"},
    manteca : "manteca",
    mantequilla : "mantequilla",
    margarina : "margarina",    
}

export const citricos = {
    limon : "limon",
    naranja : "naranja",
    toronja : "toronja",
    mandarina : "mandarina",
    lima : "lima",
}

let arrayForRecipesNames = [];

export const recipesTutorial = [
    {
        nombre : "caldo de pescado",
        ingredientes : [vegetales.papa, vegetales.chayote, vegetales.zanahoria, vegetales.calabaza, vegetales.apio, vegetales.elote,
             condimentosYPicantes.knor,
            condimentosYPicantes.sal, condimentosYPicantes.pimienta, proteina.sopa],
        preparacion : resDescr.preparacionCaldo,

    }, 
    {
        nombre : "filete empapelado",
        ingredientes : [condimentosYPicantes.ajo, grasas.aceite.soya, vegetales.tomate, vegetales.cebolla.blanca, vegetales.calabaza, vegetales.zanahoria, grasas.manteca,
            condimentosYPicantes.sal, condimentosYPicantes.pimienta, proteina.pescado.filete],
            preparacion : resDescr.fileteEmpapelado,
    },
    {
        nombre : "filete al mojo de ajo",
        ingredientes : [condimentosYPicantes.ajo, grasas.manteca, grasas.aceite.soya, condimentosYPicantes.sal, 
            condimentosYPicantes.pimienta, proteina.pescado.filete],
            preparacion : resDescr.fileteAlMojo,
    },
    {
        nombre : "atun sellado",
        ingredientes : [condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.salsas.salsaInglesa, condimentosYPicantes.salsas.salsaMaggi, citricos.limon, condimentosYPicantes.chile.serrano, `steak de ${proteina.atun}`],
        preparacion : resDescr.atunSellado,
    },
    {
        nombre : "ceviche de atun",
        ingredientes : [vegetales.cebolla.blanca, vegetales.pepino, condimentosYPicantes.cilantro, condimentosYPicantes.chile.serrano, citricos.limon, frutos.mango, 
            condimentosYPicantes.salsas.salsaInglesa, condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.salsas.salsaMaggi, condimentosYPicantes.sal, 
            condimentosYPicantes.pimienta, `un steak de ${proteina.atun} por persona`],
        preparacion : resDescr.cevicheDeAtun,
    },
    {
        nombre : "sashimi de atun",
        ingredientes : [vegetales.cebolla.blanca, condimentosYPicantes.chile.serrano, citricos.limon, condimentosYPicantes.salsas.salsaInglesa, condimentosYPicantes.salsas.salsaMaggi, condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.sal, condimentosYPicantes.pimienta, proteina.atun],
        preparacion : resDescr.sashimiDeAtun,
    },
    {
        nombre : "sashimi de salmon",
        ingredientes : [vegetales.cebolla.blanca, condimentosYPicantes.chile.serrano, citricos.limon, condimentosYPicantes.salsas.salsaInglesa, condimentosYPicantes.salsas.salsaMaggi, condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.sal, condimentosYPicantes.pimienta, proteina.salmon],
        preparacion : resDescr.sashimiDeSalmon,
    },
    {
        nombre : "chicharron de pescado",
        ingredientes : [condimentosYPicantes.empanizador, proteina.huevo, condimentosYPicantes.harina, grasas.aceite.soya, `${proteina.pescado.lonja} en trozos`,],
        preparacion : resDescr.chicharronDePescado,
    },
    {
        nombre : "chocolata en salsas negras",
        ingredientes : [condimentosYPicantes.salsas.salsaInglesa, condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.salsas.salsaMaggi, citricos.limon, vegetales.tomate, vegetales.cebolla.blanca, condimentosYPicantes.sal,
            condimentosYPicantes.pimienta, condimentosYPicantes.chile.chiltepin, proteina.almeja.chocolata],
        preparacion : resDescr.chocolataEnSalsasNegras,
    },
    {
        nombre : "chocolata al mojo de ajo",
        ingredientes : [grasas.manteca, condimentosYPicantes.ajo, condimentosYPicantes.sal, proteina.almeja.chocolata],
        preparacion : resDescr.chocolataAlMojoDeAjo,
    },
    {
        nombre : "calamar al mojo de ajo",
        ingredientes : [grasas.manteca, condimentosYPicantes.ajo, condimentosYPicantes.sal, grasas.aceite.soya, proteina.calamar],
        preparacion : resDescr.calamarAlMojoDeAjo,
    }, 
    {
        nombre : "ceviche de callo de almeja",
        ingredientes : [vegetales.cebolla.blanca, condimentosYPicantes.cilantro, vegetales.pepino, citricos.limon,condimentosYPicantes.salsas.salsaInglesa,
             condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.salsas.salsaMaggi, condimentosYPicantes.chile.chiltepin],
            preparacion : resDescr.cevicheDeCalloDeAlmeja,
    },
    {
        nombre : "salmon al mojo de ajo",
        ingredientes : [grasas.manteca, condimentosYPicantes.ajo, grasas.aceite.soya, proteina.salmon],
        preparacion : resDescr.salmonAlMojoDeAjo,
    },
    {
        nombre : "salmon con miel",
        ingredientes : [grasas.aceite.soya, condimentosYPicantes.miel, condimentosYPicantes.salsas.salsaInglesa, condimentosYPicantes.salsas.salsaSoya, condimentosYPicantes.salsas.salsaMaggi, proteina.salmon,],
        preparacion : resDescr.salmonConMiel,
    },
    {
        nombre: "coctel de camaron",
        ingredientes : [vegetales.tomate, vegetales.cebolla.blanca, condimentosYPicantes.cilantro, vegetales.pepino, citricos.limon, condimentosYPicantes.clamato, 
            condimentosYPicantes.catsup, vegetales.aguacate],
        preparacion : resDescr.coctelDeCamaron,
    },
    {
        nombre : "ceviche de pescado",
        ingredientes : [proteina.pescado.molida, citricos.limon, vegetales.cebolla.blanca, vegetales.tomate, condimentosYPicantes.cilantro, vegetales.pepino, vegetales.chile,
            vegetales.aguacate, condimentosYPicantes.sal, condimentosYPicantes.pimienta],
        preparacion : resDescr.cevicheDePescado,
    },
    {
        nombre : "ensalada de surimi",
        ingredientes : [vegetales.pepino, vegetales.zanahoria, grasas.crema, condimentosYPicantes.mayonesa, condimentosYPicantes.sal, condimentosYPicantes.pimienta,
            vegetales.cebolla.blanca, vegetales.chile, proteina.surimi],
        preparacion : resDescr.ensaladaDeSurimi,
    },
    {
        nombre : "dorado a la plancha con salsa de mango",
        ingredientes : [proteina.pescado.filete, frutos.mango, vegetales.cebolla.morada, condimentosYPicantes.cilantro, `jugo de ${citricos.limon}`],
        preparacion : resDescr.fileteDeDoradoConSalsaDeMango,
    },
    {
        nombre : "dorado al horno con limon y hierbas",
        ingredientes : [proteina.pescado.filete, citricos.limon, condimentosYPicantes.tomillo, condimentosYPicantes.romero, grasas.aceite.soya, condimentosYPicantes.sal, condimentosYPicantes.pimienta],
        preparacion : resDescr.doradoAlHornoConLimonYHierbas,
    },   
]

/*  FUNCTION TO CREATE RECIPES */
function createRecipefunctionalProg(nameRecipe, ingredients = []) {
    arrayForRecipesNames.push(nameRecipe);
    return {nameRecipe, ingredients, preparation}
}
