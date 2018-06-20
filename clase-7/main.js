

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

function ejercicio5() {

    var visible = true;
    alert(!visible);  // Muestra "false" y no "true"
    var cantidad = 0;
    var resultado = !cantidad;  // resultado = true
    alert(resultado);
    cantidad = 2;
    resultado = !cantidad;  // resultado = false
    alert(resultado);
    var mensaje = "";
    resultado = !mensaje;  // resultado = true
    alert(resultado);
    var valor1 = true;
    var valor2 = false;
    resultado = valor1 && valor2; // resultado = false
    alert(resultado);
    valor1 = true;
    valor2 = true;
    resultado = valor1 && valor2; // resultado = true
    alert(resultado);
    var valor1 = true;
    var valor2 = false;
    resultado = valor1 || valor2; // resultado = true
    alert(resultado);
    valor1 = false;
    valor2 = false;
    resultado = valor1 || valor2; // resultado = false
    alert(resultado);

    
}

function ejercicio6(suma1, suma2, resta, multiplicacion,division) {

  
    var sumar = suma1 + suma2;
    var restar =sumar- resta;
    var multiplicar = sumar * multiplicacion;
    var dividir = sumar/division;
    var operacionModulo = sumar %division;
    alert("SUMA " + sumar + " Resta " + restar + " multiplicacion " + multiplicar + " dividir " + dividir + " muodulo " + operacionModulo);
    
}