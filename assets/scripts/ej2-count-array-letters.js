// Ejercicio 2: Crear una función que cuente el número de repeticiones de cada carácter a partir de uno de los arrays facilitados a continuación.

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

//Función que cuenta el número de repeticiones de cada carácter de una palabra
function countLetters(word){

    let obj={}

    //Convertimos la palabra dada a lower case
    let str = word.toLowerCase(); 

        //Mediante un loop analizamos cada carácter de la palabra 
        for(let i = 0 ; i < str.length; i++){

            //Si el carácter esta en el objeto, sumamos 1 al contador
            if(str[i] in obj){

                obj[str[i]] = obj[str[i]] + 1;
            }

            //En caso contrario, creamos una nueva propiedad (carácter) de valor 1
            else{

                obj[str[i]] = 1;
            }
        }

    return obj;
}


//Función que cuenta el número de repeticiones de cada carácter de un array
function countArrayLetters(arr){

    let newArray = []; 
    
    //Limpiamos el array dado de tipos diferentes a string
    let arry = clearArray(arr); 
    
    //Para cada elementos del array, contamos la cantidad de carácteres
    for(let i in arry){

       newArray.push(countLetters(arr[i])); 

    }

    return newArray; 
}


console.log(countArrayLetters(surnames));
console.log(countArrayLetters(escuses)); 
console.log(countArrayLetters(array));  