
const fs = require( 'fs' );
const colors = require( 'colors' );
const crearArchivo = async( base = 5, listar = true, hasta = 1) => {

    try {

        

        let salida, consola = '';

        for( let i = 1; i <= hasta; i++ ){
            salida += `${ base } x ${ i }  = ${ base * i }\n`;
            consola += `${ base }`.blue + ' x '.red + `${ i }`.blue + ' = '.red + `${ base * i }\n`.green;

        }

        if( listar ) { 

            console.log('====================='.yellow);
            console.log( `Tabla del ${ base }`.rainbow );
            console.log('====================='.yellow);
            console.log( consola ); }
        
        
        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        return  `tabla-${ base }.txt creado` ;
    }catch(err){
        throw err;
    }

    

}

module.exports = {
    crearArchivo, // Es lo mismo que crearArchivo: crearArchivo
}