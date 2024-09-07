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

const condimentos = {
    ajo : "ajo",
    chile : "chile",
    sal : "sal",
    pimienta : "pimienta",
    empanizador : "empanizador",
    knor : "knor",
    mayonesa : "mayonesa",
    salsaInglesa : "salsa inglesa",
    salsaMaggi : "salsa maggi",
    salsaSoya : "salsa de soya",
    miel : "miel",
    cilantro : "cilantro",
    harina : "harina",
    aceite : "aceite",
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
             condimentos.knor,
            condimentos.sal, condimentos.pimienta, proteina.sopa],
        "modo de preparacion" : someVariable,

    }, 
    {
        nombre : "filete empapelado",
        ingredientes : [condimentos.ajo, aceites["aceite de oliva"], vegetales.tomate, vegetales.cebolla, vegetales.calabaza, vegetales.zanahoria, aceites.mantequilla,
            condimentos.sal, condimentos.pimienta, proteina.pescado.filete],
        "modo de preparacion" : someVariable,
    },
    {
        nombre : "filete al mojo de ajo",
        ingredientes : [condimentos.ajo, aceites.mantequilla, aceites["aceite de soya"], condimentos.sal, 
            condimentos.pimienta, proteina.pescado.filete],

    },
    {
        nombre : "atun sellado",
        ingredientes : [condimentos.salsaSoya, condimentos.salsaInglesa, condimentos.salsaMaggi, citricos.limon, picantes.serrano, `steak de ${proteina.atun}`],
        "modo de preparacion" : someVariable,
    },
    {
        nombre : "ceviche de atun",
        ingredientes : [vegetales.cebolla, vegetales.pepino, condimentos.cilantro, picantes.serrano, citricos.limon, frutos.mango, 
            condimentos.salsaInglesa, condimentos.salsaSoya, condimentos.salsaMaggi, condimentos.sal, 
            condimentos.pimienta, `un steak de ${proteina.atun} por persona`],
    },
    {
        nombre : "sashimi de atun",
        ingredientes : [vegetales.cebolla, picantes.serrano, citricos.limon, condimentos.salsaInglesa, condimentos.salsaMaggi, condimentos.salsaSoya, condimentos.sal, condimentos.pimienta, `${proteina.atun}`],
    },
    {
        nombre : "sashimi de salmon",
        ingredientes : [vegetales.cebolla, picantes.serrano, citricos.limon, condimentos.salsaInglesa, condimentos.salsaMaggi, condimentos.salsaSoya, condimentos.sal, condimentos.pimienta, `${proteina.salmon}`],
    },
    {
        nombre : "chicharron de pescado",
        ingredientes : [condimentos.empanizador, proteina.huevo, condimentos.harina, aceites["aceite de soya"], `${proteina.pescado.lonja} en trozos`,],
    },
    {
        nombre : "chocolata en salsas negras",
        ingredientes : [condimentos.salsaInglesa, condimentos.salsaSoya, condimentos.salsaMaggi, citricos.limon, vegetales.tomate, vegetales.cebolla, condimentos.sal,
            condimentos.pimienta, picantes.chiltepin, proteina.almeja.chocolata],
    },
    {
        nombre : "chocolata al mojo de ajo",
        ingredientes : [aceites.mantequilla, condimentos.ajo, condimentos.sal, proteina.almeja.chocolata],
    },
    {
        nombre : "calamar al mojo de ajo",
        ingredientes : [aceites.mantequilla, condimentos.ajo, condimentos.sal, aceites["aceite de soya"], proteina.calamar],
    }, 
    {
        nombre : "ceviche de callo e almeja",
        ingredientes : [vegetales.cebolla, condimentos.cilantro, vegetales.pepino, citricos.limon,condimentos.salsaInglesa,
             condimentos.salsaSoya, condimentos.salsaMaggi, vegetales.chile],
    },
    {
        nombre : "salmon al mojo de ajo",
        ingredientes : [aceites.mantequilla, condimentos.ajo, aceites["aceite de soya"], proteina.salmon],
    },
    {
        nombre : "salmon con miel",
        ingredientes : [aceites["aceite de soya"], condimentos.miel, condimentos.salsaInglesa, condimentos.salsaSoya, condimentos.salsaMaggi, proteina.salmon,],
    },
    {
        nombre: "coctel de camaron",
        ingredientes : [vegetales.tomate, vegetales.cebolla, condimentos.cilantro, vegetales.pepino, citricos.limon, condimentos.clamato, 
            condimentos.catsup, vegetales.aguacate],
    },
    {
        nombre : "ceviche de pescado",
        ingredientes : [proteina.pescado.molida, citricos.limon, vegetales.cebolla, vegetales.tomate, condimentos.cilantro, vegetales.pepino, vegetales.chile,
            vegetales.aguacate, condimentos.sal, condimentos.pimienta],
    },
    {
        nombre : "ensalada de surimi",
        ingredientes : [vegetales.pepino, vegetales.zanahoria, grasas.crema, condimentos.mayonesa, condimentos.sal, condimentos.pimienta,
            vegetales.cebolla, vegetales.chile, proteina.surimi],
    }
]

/*  FUNCTION TO CREATE RECIPES */
function createRecipefunctionalProg(nameRecipe) {
    arrayForRecipesNames.push(nameRecipe);
    return {nameRecipe, ingredients, preparation}
}
