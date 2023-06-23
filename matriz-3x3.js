// let matriz = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
//MOSTRAR LA MATRIZ POR PANTALLA

// console.log("Matriz: ")
// for (let i=0; i<matriz.length; i++){
//     console.log(matriz[i].join("\t"))
// }


//SUMA DE DOS MATRICES

// function suma (matriz1, matriz2) {
//     let resultado = []
//     for (let i=0; i < matriz1.length; i++){
//         let fila = []
//         for(let j=0; j < matriz1[i].length; j++){
//             fila.push(matriz1[i][j] + matriz2[i][j])
//         }
//         resultado.push(fila)
        
//     }
//     return resultado;
// }

// let matriz1 = [[1,2,3], [4,5,6], [7,8,9]];
// let matriz2 = [[1,2,3], [1,1,1], [2,3,4]];
// let sumas = suma(matriz1, matriz2)
// console.log(sumas)


//SUMAR DOS VECTORES

// var vector1 = [1,2,3,4,5];
// var vector2 = [3,4,5,6,];
// var suma= [];

// for (i = 0; i<vector1.length; i++){
//     suma[i]= parseInt(vector1[i])+parseInt(vector2[i]);
// }

// console.log("La suma de los vectores es: ",suma)

//MATRIZ DIAGONAL

// function matrizDiagonal (matriz){
//     for (let i=0; i < matriz.length; i++){
//         for (j=0; j < matriz[i].length; j++){
//             if( i !== j && matriz[i][j] !== 0){
//                 return false
//             }
//         }
//     }
//     return true
// }

// let matriz = [[1,0,0], [0,2,0],[0,0,3]]
// console.log(matrizDiagonal(matriz))

// let otraMatriz = [[1,0,1], [0,2,1], [1,0,3]];
// console.log(matrizDiagonal(otraMatriz))

// let age = prompt ('¿Cuántos años tienes?', 100);
// alert(`Tienes ${age} años!`); //Tienes 100 años!


function crearMatriz(n){
    let matriz = []
    for ( let i=0; i<n; i++){
        matriz[i]=[];
        for (let j=0; j<n; j++){
            matriz[i][j] = parseInt(prompt(`Ingrese el número para la posición [${i}][${j}]:`));
        }
        
    }
    return matriz;
}

    

function sumarMatrices (matriz1, matriz2) {
    let resultado = []
    for (let i=0; i < matriz1.length; i++){
        let fila = []
        for(let j=0; j < matriz1[i].length; j++){
            fila.push(matriz1[i][j] + matriz2[i][j])
        }
        resultado.push(fila)
        
    }
    return resultado;
}


function mostrarMatriz(matriz, nombre){
    console.log(`Matriz ${nombre}:`);
    for (let i = 0; i < matriz.length; i++){
        console.log(matriz[i].join("\t"));
    }
    
}

let n = parseInt(prompt("Ingrese la longitud de la matriz por favor: "))


let matriz1 = crearMatriz(n);

let matriz2 = crearMatriz(n);

let resultado = sumarMatrices(matriz1, matriz2);

mostrarMatriz (matriz1, "A")
console.log("\n");
mostrarMatriz (matriz2, "B");
console.log("\n")
mostrarMatriz (resultado, "Resultado:");