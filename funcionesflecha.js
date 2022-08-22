const nombres = ['Mario', 'Ivan', 'Mejia', 'Lopez'];

const numero_caracteres = nombres.map(nombre =>   nombre +" tiene " +nombre.length+ " letras" ); /*se optimiza esta función para evitar
escribir tres lineas de codigo*/

const numero_caracteres2 = nombres.map(function(nombre){
    return nombre +" tiene " +nombre.length+ " letras";
});

console.log(numero_caracteres);
console.log("\n"+numero_caracteres2);

// (parametro) => {
//     return//codigo a ejecutar
// }