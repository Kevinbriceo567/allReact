export function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

const nombre = 'Kevin';

console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );