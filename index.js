
let aux = 0;
function abuelita(){
        
        let dato = prompt('Hablando con la Abuelita')
   
        dato = String(dato)

            if(dato.charAt(0) === dato.charAt(0).toUpperCase()){
                
                alert('NO, NO DESDE 1983')
               
                    if( dato == 'ADIOS TQM'){
                     aux++
                     //console.log(aux)
                     alert(`${aux}`)
                    }
                    if(aux === 3){
                        alert('SE ACABO LA CONVERSACION CON LA ABUELITA DE BATMAN')
                        return 0                  
                    }
                    abuelita()
            } else {
                
                alert('¡EH! ¡NO TE ESCUCHO, HIJO!')
                abuelita()
                
            }

}

abuelita()
