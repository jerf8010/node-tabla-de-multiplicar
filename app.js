


const { crearArchivo } = require( './helpers/multiplicar');
const argv = require( './config/yargs' );

console.clear();

// Argumentos desde la consola

/* const [ , , arg3 = 'base=5' ] = process.argv;
const [ , base ] = arg3.split( '=' );
console.log( base ); */

// Con paquete yargs

console.log( argv );
//console.log( 'base: yargs', argv.b )



// Creacion del archivo
/* const base = 3;*/
crearArchivo( argv.b, argv.l, argv.h )
    .then( console.log )
    .catch( console.log ); 





