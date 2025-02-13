
/**
 * 
 * @param {array<string>} deck - Recibe el deck actual
 * @returns {string} - string con el valor y tipo de la carta
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}
