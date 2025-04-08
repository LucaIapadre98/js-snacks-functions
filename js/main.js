/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito
 (es. "Ciao [nome]") */

const userName = 'Mario';
const greet = prompt("Saluto:")
console.log(greet);



// Dichiara la funzione qui.
function greetName(name) {
    return `Ciao ${userName} !`;
}
// Invoca la funzione qui e stampa il risultato in console
greetName();
console.log(greetName());




    

//Risultato atteso se si passa 'Mario': // ciao Mario
