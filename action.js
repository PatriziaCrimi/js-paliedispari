/* ASSIGNMENT

EXERCISE NUMBER 1. PALINDROMES
Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no
(una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

EXERCISE NUMBER 2. ODD OR EVEN?
Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
L'utente sceglie un numero tra 1 e 5 e sceglie "pari" o "dispari".
Il computer genera un secondo numero casuale tra 1 e 5.
Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer e stabilire se il risultato è pari o dispari.
Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)
*/


// ******************** EXERCISE NUMBER 1. PALINDROMES ********************
console.log('*** EXERCISE NUMBER 1. PALINDROMES ***');

// Variables initialization
var word = prompt('Enter a word');
console.log('The word you entered is: ' + word + '.');

// Standardize the word to lowercase --> necessary to compare each character
var standardized_word = word.toLowerCase();
console.log('The word standardized to lowercase is: ' + standardized_word + '.');

// Transforming string into an array
var word_array = Array.from(standardized_word);
console.log('The word (already standardized to lowercase) transformed into an array is: ');
console.log(word_array);

// Check if the word (already standardized to lowercase) is a palindrome
var check_palindrome = true;

for (var i = 0; i < word_array.length && check_palindrome; i++) {
  var last_character = word_array.length - (i+1);
  if (word_array[i] !== word_array[last_character]) {
    console.log('The word ' + word + ' you entered is not a palindrome.');
    check_palindrome = false;
  }
}
// Output in console
if (check_palindrome) {
  console.log('The word ' + word + ' you entered is a palindrome.');
}

// Creation of function
function checkPalindrome(word) {
  
}
