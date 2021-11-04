// Ejercicio 4: Crear una función que invierta todos los valores de un array.

let surnames = ['10', 'juan', '@12', 'null', 'antonioPerezDelCarmen', 'abcdefghtioiasoisdjads', 'Manolo', 'Perez', 'Soledad'];
let escuses = ['OMG?', 'What’s going on?', 'How much is it?', '18', null, undefined, function(){}];
let array = ['Jeferson', 'Matilda', 'R@fael', '1van', 'Pep3', 'Loquesea', 'Fel1berto', 'Pepit@', 'D@M'];


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


//Función que invierte un string
function reverseWord(str){

    let newString = "";

    //Damos la vuelta al string mediante un loop inverso
    for (let j = str.length-1; j >=0; j--) { 
        newString += str[j];
    }

    return newString; 
}


//Función que invierte los elementos de un array
function reverseArray(arr){

    let newArray = []; 
    let arry = clearArray(arr); 

    //Para cada elemento, llamamos a la función reverseWord
    for(let i in arry){
        newArray.push(reverseWord(arry[i]));
    }

    return newArray;
}


console.log(countArrayLetters(surnames));
console.log(countArrayLetters(escuses)); 
console.log(countArrayLetters(array));  