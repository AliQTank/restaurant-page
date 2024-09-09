const vegetales ={
    apio : "apio",
    aguacate : "aguacate",
    calabaza : "calabaza",
    cebolla : "cebolla",
    elote : "elote",
    papa : "papa",
    pepino : "pepino",
    tomate : "tomate",
    zanahoria : "zanahoria",
    chayote : "chayote",
}

const frutos = {
    mango : "mango",
    manzana : "manzana",
    platano : "platano",
    arandano : "arandano",
    pera : "pera",
    melon : "melón",
    sandia : "sandia",
}

const aceites = {
    "aceite de ajonjoli" : "aceite de ajonjoli", 
    "aceite de maiz" : "aceite de maiz",
    "aceite de oliva" : "aceite de oliva",
    "aceite de soya" : "aceita de soya",
    mantequilla : "mantequilla",
    manteca : "manteca",
    margarina : "margarina",
    
}

const proteina = {
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

const camarones = {
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

const pescados = {
    pargo : {blanco :"pargo blanco", rojo :"pargo rojo", alazan : "pargo alazan", raicero : "pargo raicero", pierna : "pargo pierna", mero: "pargo mero", general : "pargo"},
    mojarra : {plateada: "mojarra plateada", gris: "mojarra gris", lobina: "lobina", general : "mojarra"},
    cazon : {cazon: "cazon", guitarra: "guitarra", tripa: "tripa", manzanillo: "manzanillo", bironcho: "bironcho", tiburon: "tiburon", angelito: "cazon angelito", general : "cazon"},
    curvina : {aletaBlanca: "curvina aleta blanca", aletaAmarilla: "curvina aleta amarilla", golfina : "curvina golfina", general : "curvina"},
    huachinango : {deOrden: "huachinango de orden", chico: "huachinango chico", general : "huachinango"},
    bagre : {bandera: "bagre bandera", chihuil : "bagre chihuil", general : "bagre"},
    dorado : {general : "dorado"},
    robalo : {general : "robalo"},

}

const condimentosYPicantes = {
    ajo : "ajo",
    chile : "chile",
    sal : "sal",
    pimienta : "pimienta",
    empanizador : "empanizador",
    knor : "knor",
    mayonesa : "mayonesa",
    salsas : {salsaInglesa : "salsa inglesa", salsaMaggi : "salsa maggi", salsaSoya : "salsa soya"},
    salsaInglesa : "salsa inglesa",
    salsaMaggi : "salsa maggi",
    salsaSoya : "salsa de soya",
    miel : "miel",
    cilantro : "cilantro",
    harina : "harina",
    chle : {chiltepin : "chile chiltepin", serrano : "chile serrano", habanero : "chile habanero", jalapeño : "chile jalapeño",},
}

const picantes = {
    chiltepin : "chile chiltepin",
    serrano : "chile serrano",
    habanero : "chile habanero",
    jalapeño : "chile jalapeño",
}

const grasas = {
    crema : "crema",
    queso : "queso",
    leche : "leche",
    aceite : {oliva : "aceite de oliva", soya : "aceite de soya",},
    manteca : "manteca",
    mantequilla : "mantequilla",
    margarina : "margarina",    
}

const citricos = {
    limon : "limon",
    naranja : "naranja",
    toronja : "toronja",
    mandarina : "mandarina",
    lima : "lima",
}

let someVariable, arrayForRecipesNames = []
const recipesTutorial = [
    {
        nombre : "caldo de pescado",
        ingredientes : [vegetales.papa, vegetales.chayote, vegetales.zanahoria, vegetales.calabaza, vegetales.apio, vegetales.elote,
             condimentosYPicantes.knor,
            condimentosYPicantes.sal, condimentosYPicantes.pimienta, proteina.sopa],
        "modo de preparacion" : someVariable,

    }, 
    {
        nombre : "filete empapelado",
        ingredientes : [condimentosYPicantes.ajo, aceites["aceite de oliva"], vegetales.tomate, vegetales.cebolla, vegetales.calabaza, vegetales.zanahoria, aceites.mantequilla,
            condimentosYPicantes.sal, condimentosYPicantes.pimienta, proteina.pescado.filete],
        "modo de preparacion" : someVariable,
    },
    {
        nombre : "filete al mojo de ajo",
        ingredientes : [condimentosYPicantes.ajo, aceites.mantequilla, aceites["aceite de soya"], condimentosYPicantes.sal, 
            condimentosYPicantes.pimienta, proteina.pescado.filete],

    },
    {
        nombre : "atun sellado",
        ingredientes : [condimentosYPicantes.salsaSoya, condimentosYPicantes.salsaInglesa, condimentosYPicantes.salsaMaggi, citricos.limon, picantes.serrano, `steak de ${proteina.atun}`],
        "modo de preparacion" : someVariable,
    },
    {
        nombre : "ceviche de atun",
        ingredientes : [vegetales.cebolla, vegetales.pepino, condimentosYPicantes.cilantro, picantes.serrano, citricos.limon, frutos.mango, 
            condimentosYPicantes.salsaInglesa, condimentosYPicantes.salsaSoya, condimentosYPicantes.salsaMaggi, condimentosYPicantes.sal, 
            condimentosYPicantes.pimienta, `un steak de ${proteina.atun} por persona`],
    },
    {
        nombre : "sashimi de atun",
        ingredientes : [vegetales.cebolla, picantes.serrano, citricos.limon, condimentosYPicantes.salsaInglesa, condimentosYPicantes.salsaMaggi, condimentosYPicantes.salsaSoya, condimentosYPicantes.sal, condimentosYPicantes.pimienta, `${proteina.atun}`],
    },
    {
        nombre : "sashimi de salmon",
        ingredientes : [vegetales.cebolla, picantes.serrano, citricos.limon, condimentosYPicantes.salsaInglesa, condimentosYPicantes.salsaMaggi, condimentosYPicantes.salsaSoya, condimentosYPicantes.sal, condimentosYPicantes.pimienta, `${proteina.salmon}`],
    },
    {
        nombre : "chicharron de pescado",
        ingredientes : [condimentosYPicantes.empanizador, proteina.huevo, condimentosYPicantes.harina, aceites["aceite de soya"], `${proteina.pescado.lonja} en trozos`,],
    },
    {
        nombre : "chocolata en salsas negras",
        ingredientes : [condimentosYPicantes.salsaInglesa, condimentosYPicantes.salsaSoya, condimentosYPicantes.salsaMaggi, citricos.limon, vegetales.tomate, vegetales.cebolla, condimentosYPicantes.sal,
            condimentosYPicantes.pimienta, picantes.chiltepin, proteina.almeja.chocolata],
    },
    {
        nombre : "chocolata al mojo de ajo",
        ingredientes : [aceites.mantequilla, condimentosYPicantes.ajo, condimentosYPicantes.sal, proteina.almeja.chocolata],
    },
    {
        nombre : "calamar al mojo de ajo",
        ingredientes : [aceites.mantequilla, condimentosYPicantes.ajo, condimentosYPicantes.sal, aceites["aceite de soya"], proteina.calamar],
    }, 
    {
        nombre : "ceviche de callo e almeja",
        ingredientes : [vegetales.cebolla, condimentosYPicantes.cilantro, vegetales.pepino, citricos.limon,condimentosYPicantes.salsaInglesa,
             condimentosYPicantes.salsaSoya, condimentosYPicantes.salsaMaggi, vegetales.chile],
    },
    {
        nombre : "salmon al mojo de ajo",
        ingredientes : [aceites.mantequilla, condimentosYPicantes.ajo, aceites["aceite de soya"], proteina.salmon],
    },
    {
        nombre : "salmon con miel",
        ingredientes : [aceites["aceite de soya"], condimentosYPicantes.miel, condimentosYPicantes.salsaInglesa, condimentosYPicantes.salsaSoya, condimentosYPicantes.salsaMaggi, proteina.salmon,],
    },
    {
        nombre: "coctel de camaron",
        ingredientes : [vegetales.tomate, vegetales.cebolla, condimentosYPicantes.cilantro, vegetales.pepino, citricos.limon, condimentosYPicantes.clamato, 
            condimentosYPicantes.catsup, vegetales.aguacate],
    },
    {
        nombre : "ceviche de pescado",
        ingredientes : [proteina.pescado.molida, citricos.limon, vegetales.cebolla, vegetales.tomate, condimentosYPicantes.cilantro, vegetales.pepino, vegetales.chile,
            vegetales.aguacate, condimentosYPicantes.sal, condimentosYPicantes.pimienta],
    },
    {
        nombre : "ensalada de surimi",
        ingredientes : [vegetales.pepino, vegetales.zanahoria, grasas.crema, condimentosYPicantes.mayonesa, condimentosYPicantes.sal, condimentosYPicantes.pimienta,
            vegetales.cebolla, vegetales.chile, proteina.surimi],
    }
]

/*  FUNCTION TO CREATE RECIPES */
function createRecipefunctionalProg(nameRecipe) {
    arrayForRecipesNames.push(nameRecipe);
    return {nameRecipe, ingredients, preparation}
}
