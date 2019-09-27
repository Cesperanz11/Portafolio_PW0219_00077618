var palabra = prompt("Ingrese una palabra");
var palabra = palabra.toLowerCase();
var arr = palabra.split("");

var funcion = palindromo =>{
    let tamanho = arr.length;
    let fñag = false;

    for(let i=0; i<tamanho; i++){
        if(arr[i]==arr[tamanho-(i+1)]){
            flag=true;
        }else{
            flag=false;
        }
    }

    if(flag==true){
        console.log("Su palabra es palindrome");
    }else{
        console.log("Su palabra no es palindrome");
    }
}

funcion(arr);