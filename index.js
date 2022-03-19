
let aux = 0;
function abuelita(dato){
  
    
   // let dato = 'OK'
        dato = String(dato)

            if(dato.charAt(0) === dato.charAt(0).toUpperCase()){
                
                console.log('no desde 1983')
                    if( dato == 'ADIOS TQM'){
                     aux++
                     console.log(aux)
                    }
                    if(aux === 3){
                        console.log('SE ACABO LA CONVERSACION CON LA ABUELITA DE BATMAN XD')
                    }
               
            } else {
                console.log('no te escucho')
                
            }

}

//abuelita('hola')
//abuelita('hola')
//abuelita('hola')

//abuelita('HOLA')
//abuelita('HOLA')
//abuelita('HOLA')

abuelita('ADIOS TQM')
abuelita('ADIOS TQM')
abuelita('ADIOS TQM')