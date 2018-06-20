function cambiarStyle() {
    document.getElementById('pMensaje').style.fontSize = "45px"; 
    
}

function sumarRestar (params) {
    
    var arreglo = [5,2];
    resultado = arreglo[0] +  arreglo[1];

    alert("Suma = "+ params +": Resultado" + resultado);
}

function ejercicio4(params) {
    var numero1 = 3;
    var numero2 = 4;
    
    // Ahora, la variable numero1 vale 5
    numero1 = 5;
    
    // Ahora, la variable numero1 vale 4
    numero1 = numero2;
    
    var resultado = 5;

    resultado++;
    alert(resultado);
    resultado--; 
    alert(resultado);

}

