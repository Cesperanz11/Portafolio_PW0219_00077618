
var arr = [1, 2, 3, 6]


var funcion = x => {
    let sum = 0;
    let counts = arr.length;

    for(let i=0; i<arr.length; i++){
        sum= sum + arr[i];
    }

   prom=sum/counts;
        
   

    console.log("La Sumatoria es :" + sum);
    console.log("La media es: " + prom);
}

funcion(arr);