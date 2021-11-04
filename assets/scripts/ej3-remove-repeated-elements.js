// Ejercicio 3: Crear una función que elimine elementos repetidos en un array.

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

//Función que elimina elementos repetidos en un array 
function removeRepeated(arr){

    let newArray = []; 
    let arry = clearArray(arr); 

    for(let i in arry){

        //Miramos si en la nueva array hay un valor similar mediante indexOf
        if(newArray.indexOf(arry[i]) == -1){

            //En caso de que no haya un valor repetido, incluímos el nuevo elemento
            newArray.push(arry[i]); 
        }
    }

    return newArray; 
}

console.log(countArrayLetters(surnames));
console.log(countArrayLetters(escuses)); 
console.log(countArrayLetters(array));  