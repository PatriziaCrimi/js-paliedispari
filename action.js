/* ASSIGNMENT

EXERCISE NUMBER 1. PALINDROMES
Palindroma: scrivere una funzione per valutare se una parola è palindroma oppure no
(una parola è palindroma se la posso leggere nello stesso modo dall'inizio alla fine e viceversa, ad esempio "anna" è palindroma, "andrea" no)

EXERCISE NUMBER 2. ODD OR EVEN?
Pari o dispari: scrivere una (o più di una) funzione per simulare il gioco di pari e dispari tra l'utente e il computer.
L'utente sceglie un numero tra 1 e 5
e sceglie "pari" o "dispari".
Il computer genera un secondo numero casuale tra 1 e 5.
Per vedere chi dei due vince, si deve fare la somma dei numeri dell'utente e del computer
e stabilire se il risultato è pari o dispari.
Ad esempio, l'utente inserisce il numero 1 e indica come scelta "pari"; il computer genera casualmente il numero 3. In questo caso ha vinto l'utente (perché 1+3 = 4, che è pari)
*/


// ******************** EXERCISE NUMBER 1. PALINDROMES ********************
console.log('*** EXERCISE NUMBER 1. PALINDROMES ***');
console.log('');

// Variables initialization
var word_to_check = prompt('Enter a word to check if it is a palindrome.');
console.log('The word you entered is: ' + word_to_check + '.');

// Output in console
if (checkPalindrome(word_to_check)) {
  console.log('The word \'' + word_to_check + '\' you entered is a palindrome.');
} else {
  console.log('The word \'' + word_to_check + '\' you entered is not a palindrome.');
}
console.log('');

// ----------- Creation of the function "checkPalindrome" -----------

function checkPalindrome(word) {

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
      check_palindrome = false;
    }
  }
  return check_palindrome;
}


// ******************** EXERCISE NUMBER 2. ODD OR EVEN? ********************
console.log('*** EXERCISE NUMBER 2. ODD OR EVEN? ***');
console.log('');

// Variables and constants initialization: user's number
const minimum_number = 1;
const maximum_number = 5;
var user_number = parseFloat(prompt('Enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.'));

// Check valid input: user's number - OPTIMIZED SOLUTION (only While loop)
while (isNaN(user_number) || user_number < minimum_number || user_number > maximum_number) {
  alert('ERROR. The value you entered is invalid.');
  user_number = parseFloat(prompt('Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.'));
  console.log('ERROR. The value you entered is invalid. Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.');
}
console.log('The number you entered is: ' + user_number + '.');

/*
// Check valid input: user's number - SOLUTION While loop & If
var check_valid_number = false;
while (check_valid_number === false) {
  if (!isNaN(user_number) && user_number >= minimum_number && user_number <= maximum_number) {
    console.log('The number you entered is: ' + user_number + '.');
    check_valid_number = true;
  } else {
    alert('ERROR. The value you entered is invalid.');
    user_number = parseFloat(prompt('Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.'));
    console.log('ERROR. The value you entered is invalid. Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.');
  }
}
*/

// Variables initialization: user's guess (odd or even)
var user_guess = prompt('What is your guess? Choose between \'odd\' or \'even\'.');
user_guess = user_guess.toLowerCase();

// Check valid input: user's guess
while (user_guess !== 'odd' && user_guess !== 'even') {
  alert('ERROR. The value you entered is not valid.');
  user_guess = prompt('Please enter \'odd\' or \'even\'.');
  user_guess = user_guess.toLowerCase();
}
console.log('The user\'s guess is: ' + user_guess + '.');

// Generating random number: computer's number (with function)
var pc_number = randomNumber(minimum_number, maximum_number);
console.log('The computer\'s number is: ' + pc_number + '.');

// Calculating Sum (with function)
var sum = sumNumbers(user_number, pc_number);
console.log('The sum of the two numbers is: ' + sum + '.');

// Check if Sum is odd or even (with function)
var check_sum = checkOdd(sum);
if (check_sum) {
  console.log('The sum is odd.');
} else {
  console.log('The sum is even.');
}

// ------------------- Check the winner -------------------

// Check user's guess: transforming into boolean variable (for comparison)
if (user_guess === 'odd') {
  var check_user_guess = true;
} else if (user_guess === 'even') {
  check_user_guess = false;
}

// Comparison between user's guess (boolean) and sum (boolean)
if (check_user_guess && check_odd) {
  console.log('You won! The sum is odd.');
} else if (!check_user_guess && !check_odd) {
  console.log('You won! The sum is even.');
} else if (check_user_guess && !check_odd) {
  console.log('You lose! The sum is even and the computer won.');
} else if (!check_user_guess && check_odd) {
  console.log('You lose! The sum is odd and the computer won.');
}


// --------------------- Creation of functions ---------------------

// ***** FUNCTION: Generating random number from minimum_number to maximum_number *****
function randomNumber(minNum, maxNum) {
  var random_number = Math.floor(Math.random() * maxNum + minNum);
  return random_number;
}

// ***** FUNCTION: Calculating Sum *****
function sumNumbers(num1, num2) {
  var sum_result = num1 + num2;
  return sum_result;
}

// ***** FUNCTION: Check odd-even numbers *****
function checkOdd(number){
  if (number % 2) {
    // If the number is odd it returns "true"
    var check_odd = true;
  } else {
    // If the number is even it returns "false"
    check_odd = false;
  }
  return check_odd;
}
