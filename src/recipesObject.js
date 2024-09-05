let someVariable, arrayForRecipesNames = [];
const recipesTutorial = [
    {
        nombre : "caldo de pescado",
        ingredientes : ["papa", "chayote", "zanahoria", "calabaza", "apio", "elote", "knor camaron",
            "sal", "pimienta", "sopa de mariscos"],
        "modo de preparacion" : someVariable,

    }, 
    {
        nombre : "filete empapelado",
        ingredientes : ["ajo", "aceite de oliva", "jitomate", "cebolla", "calabaza", "zanahoria", "mantequilla",
            "sal", "pimienta", "filete de basa"],
        "modo de preparacion" : someVariable,
    },
    {
        nombre : "filete al mojo de ajo",

    },
    {
        nombre : "atun sellado",
        ingredientes : [],
        "modo de preparacion" : someVariable,
    },
    {
        nombre : "ceviche de atun",
        ingredientes : [],
    },
    {
        nombre : "sashimi",
        ingredientes : [],
    },
    {
        nombre : "chicharron de pescado",
        ingredientes : [],
    },
    {
        nombre : "chocolata en salsas negras",
        ingredientes : [],
    },
    {
        nombre : "chocolata al mojo de ajo",
        ingredientes : [],
    }, {
        nombre : "ceviche de callo e almeja",
        ingredientes : [],
    }, {

    },
    {
        nombre : "salmon al mojo de ajo"
    },
    {
        nombre : "salmon con miel"
    },
    {
        nombre: "coctel de camaron"
    },
    {
        nombre : "ceviche de pescado"
    },
    {
        nombre : "ensalada de surimi"
    }
]

/*  FUNCTION TO CREATE RECIPES */
function createRecipefunctionalProg(nameRecipe) {
    arrayForRecipesNames.push(nameRecipe);
    return {nameRecipe, ingredients, preparation}
}