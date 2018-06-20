var persona = {
    nombre: 'ramiro',
    apellido: 'contreras',
    edad: '30',
    colorPreferido: 'azul'
}

function change() {
    
    document.getElementById('pMensaje').innerHTML = persona.nombre + ' tiene ' + persona.edad + 'años';

}
