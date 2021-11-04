// Ejercicio 1: Crear una función que genere una excusa aleatoria a partir de los arrays facilitados a continuación.

let surnames = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let escuses = ['OMG?', 'What’s going on?', 'How much is it?', '18', null, undefined, function(){}];
let array = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];


//Función que nos devuelve un número aleatorio según la longitud de un array  
function generateRandom(arr){

    return Math.floor(Math.random()*arr.length);
}

//Función que "elimina" los valores diferentes de string de un array
function clearArray(arr){
    
    let newArr=[];

    for (let i in arr){
        
        if(typeof (arr[i]) === 'string'){

            newArr.push(arr[i]);
        }
    }

    return newArr;
}

//Función que genera una excusa dado tres arrays
function generateExcuse(arr1, arr2, arr3){

    //Para cada array, limpiamos y generamos un número aleatorio
    let n1 = generateRandom(clearArray(arr1)); 
    let n2 = generateRandom(clearArray(arr2)); 
    let n3 = generateRandom(clearArray(arr3)); 

    return `${arr1[n1]} ${arr2[n2]} ${arr3[n3]}`;
}


console.log(generateExcuse(surnames, escuses, array));