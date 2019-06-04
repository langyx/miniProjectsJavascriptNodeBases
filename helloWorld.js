console.log("HelloWorld");


/**
 *
 Variables
 *
 **/

/**
 * On utilise le keyword let pour définir
 * une variable qui va varier
 * @type {number} (Int // Float)
 */
let myVariable = 12;

/**
 * On utilise le keyword const pour définir
 * une variable constante (varie pas)
 * @type {string}
 */
const myConst = "Toto";


/**
 * Défini une variable global, accessible sur
 * tout le scope du script
 * @type {[]}
 */
var myGlobalVar = ["Toto", 12];


/**
 * On récupère le type avec typeof
 * @type {string}
 */
const myUnkownVar = "Hello";
console.log(typeof myUnkownVar);

/**
 * Tableau // Array
 */

/*
Pour définir un tableau (initialiser)
 */
const myArray = []; //Array();
/**
 * Ajouter un élement au tableau
 */
myArray.push("My first array val");
console.log(myArray);
/**
 * Pour accéder à une valeur à un index I
 */
const i = 0;
console.log(myArray[i]);

/**
 * Trouver l'index d'un élément de tableau
 */
console.log(myArray.indexOf("My first array val"));

/**
 * Supprimer un élément d'un tableau par son index i
 */
myArray[0] = undefined; //null
myArray.slice(0);

/**
 https://www.w3schools.com/js/
 **/

/**
 Initialiser Dictionnaire (Hash)
 Tableau Clé : Valeur
 **/
const myDic = {};

/**
 Assigner une valeur à une clé
 **/
myDic["myKey"] = "myValue";

/**
 * Accéder à la valeur d'une clé
 */
console.log(myDic["myKey"]);


/**
 * Variable de type Bool (boolean)
 * Variable qui est soit vraie sauf faux (true or false)
 */
const myBool = true;
/**
 * Le ! permet d'inverser une valeur bool
 */
console.log(!myBool);


/**
 Conditions
 permet de concevoir le code selon des conditions
 **/
const age = 19;
const majorAge = 18;

/**
 * Je veux savoir si age est majeur
 */
if (age >= majorAge)
{
    console.log("Je suis majeur");
}else if (age < 3)
{
    console.log("J'ai moins de 3 ans");
}
else{
    console.log("Je suis mineur");
}

/**
 * Ternaire
 * condition ? vraie : faux
 */
const amIMajor = age >= 18 ? "Je suis majeur" : "Je suis mineur";


switch (age) {
    case 1:
        console.log("J'ai un an");
        break;

    case 18:
        console.log("J'ai 18 ans");
        break;

    default:
        console.log("Je suis le reste");
        break;
}


/**
  Boucles
 **/

let myI = 0;
while (myI < 36 )
{
    console.log("Hello");
    myI += 1; // myI++;
}

for (let myJ = 0; myI < 36; myJ += 1)
{
    console.log("To");
}

const myIterateArray = ["a", "b"];
/**
 * Boucle sur mon tableau et affiche tous les items
 * un par un
 */
myIterateArray.forEach((item) => console.log(item));


/**
 Fonctions
 permet de réaliser une "action" que l'on peut
 appeler quand on veut (plusieurs fois)

 Les fonctions peuvent être appelées
 à tout moment dans le code
 **/

/**
 * On instatie la fonction de nom
 * myFunction qui prend en paramètre myParam (valeur par défaut yannis)
 * @param myParam
 */
function myFunction(myParam)
{
    console.log(myParam);
}

/**
 * On appel myFunction en passant "Toto" en
 * paramètre
 */
myFunction("Toto");

/**
 * Fonction fléchée
 * @param parameter1
 */
let myArrowFunction = (parameter1) => console.log(parameter1);
/**
(paramètre) => {
 Instructions
}
 **/
myArrowFunction("p1");
