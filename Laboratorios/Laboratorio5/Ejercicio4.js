var numero = prompt("Ingrese un numero");

var arr = []
for (var i=0; i<20; i++){
    arr.push(Math.round(Math.random()*20))
}

var funcion = adivinar =>{
    let flag =false;

    for(let j=0; j<arr.length; j++){
        if(numero == arr[j]){
            flag=true;
        }else{
            flag=false;
        }
    } ;

    if(flag==true){
        console.log("Felicidades, usted gano")
    }else{
        console.log("Usted ha perdido")
    }
}

funcion(numero, arr);
