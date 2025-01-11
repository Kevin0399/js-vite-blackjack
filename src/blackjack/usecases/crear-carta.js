/**
 * 
 * @param {String} carta - string del valor y tipo de carta 
 * @param {HTMLElement} divCartas - HTML para mostrar la carta 
 */

export const crearCarta = ( carta, divCartas ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append(imgCarta);
}