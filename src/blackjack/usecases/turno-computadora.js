import { crearCarta, pedirCarta, valorCarta } from "./index";

/**
 * 
 * @param { Number } puntosMinimos - puntos minimos que la computadora necesita para ganar 
 * @param { HTMLElement} puntosHTML - HTML para mostrar los puntos
 * @param { HTMLElement} divCartasComputadora - HTML para mostrar las cartas
 * @param { Array<String>} deck 
 */

export const turnoComputadora = ( puntosMinimos = 0, puntosHTML, divCartasComputadora, deck=[] ) => {

    let puntosComputadora = 0;
    if(!puntosMinimos) throw new Error ('Puntos minimos son necesarios');
    if(!deck || deck.length === 0) throw new Error ('Deck es necesario');
    if(!puntosHTML) throw new Error ('puntosHTML es necesario');

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       crearCarta(carta, divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 1000 );
}
