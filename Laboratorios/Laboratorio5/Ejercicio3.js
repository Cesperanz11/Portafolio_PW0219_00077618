var numero = 4;
var arr = [1,2,3,4,4,5];

var funcion = buscador =>{
    let contador=0;

    for(let i =0; i< arr.length; i++){
        if(numero == arr[i]){
            contador = contador +1;
        };
    };

    console.log(contador);
}

funcion(numero, arr);