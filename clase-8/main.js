var persona = {
    nombre: 'ramiro',
    apellido: 'contreras',
    edad: '30',
    colorPreferido: 'azul'
}

function change() {
    
    document.getElementById('pMensaje').innerHTML = persona.nombre + ' tiene ' + persona.edad + 'años';

}

//ejercicio 3

var mensaje = null;


function creaMensaje() {
  mensaje = 'Mensaje de prueba';
}

function creaMensaje() {
    var mensaje = 'Mensaje de prueba';
}

creaMensaje();
alert(mensaje);

var mensaje = "gana la de fuera";

function muestraMensaje() {
    var mensaje = "gana la de dentro";
    alert(mensaje);
}

alert(mensaje);
muestraMensaje();
alert(mensaje);


