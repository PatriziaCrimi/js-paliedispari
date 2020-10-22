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

// --------- SOLUTION NUMBER 1 vers.1 - Comparing characters (with ARRAY) ---------

// Variables initialization
var word_to_check = prompt('Enter a word to check if it is a palindrome.');
console.log('The first word you entered is: ' + word_to_check + '.');
console.log('');
// Print input in HTML --> storing the words to check in an array
var word_to_check_array = [word_to_check];

// Output in console & HTML - invoking function SOLUTION N. 1
console.log('--- Invoking function SOLUTION N. 1 ---');
console.log('');

var print_palindrome_check = document.getElementsByClassName('palindrome-check');

if (isPalindrome1(word_to_check)) {
  console.log('The word \'' + word_to_check + '\' you entered is a palindrome.');
  alert('The word \'' + word_to_check + '\' you entered is a palindrome.');
  // Print output in HTML
  print_palindrome_check[0].innerHTML = ' is a palindrome';
} else {
  console.log('The word \'' + word_to_check + '\' you entered is not a palindrome.');
  alert('The word \'' + word_to_check + '\' you entered is not a palindrome.');
  // Print output in HTML
  print_palindrome_check[0].innerHTML = ' is not a palindrome';
}
console.log('');


// --------- SOLUTION NUMBER 2 - Comparing reversed word (with array) ---------

// Variables initialization
var word_to_check = prompt('Enter a word to check if it is a palindrome.');
console.log('The second word you entered is: ' + word_to_check + '.');
console.log('');
// Print input in HTML --> storing the words to check in an array
word_to_check_array.push(word_to_check);

// Output in console - invoking function SOLUTION N. 2
console.log('--- Invoking function SOLUTION N. 2 ---');
console.log('');

if (isPalindrome2 (word_to_check)) {
  console.log('The word \'' + word_to_check + '\' you entered is a palindrome.');
  alert('The word \'' + word_to_check + '\' you entered is a palindrome.');
  // Print output in HTML
  print_palindrome_check[1].innerHTML = ' is a palindrome';
} else {
  console.log('The word \'' + word_to_check + '\' you entered is not a palindrome.');
  alert('The word \'' + word_to_check + '\' you entered is not a palindrome.');
  // Print output in HTML
  print_palindrome_check[1].innerHTML = ' is not a palindrome';
}
console.log('');


// ---------------------------- Print Output in HTML ----------------------------

// Print words to check (array)
var print_word = document.getElementsByClassName('word-to-check');
var j = 0;
for (var i = 0; i < print_word.length; i++) {
  print_word[i].innerHTML = word_to_check_array[j];
  if (i >= 1) {
    j = 1;
  }
}

// ----------- Creation of the function to check Palindromes -----------

// ### SOLUTION NUMBER 1 vers.1 - Comparing characters (with ARRAY) ###
function isPalindrome1(word1) {

  // Standardize the word to lowercase --> necessary to compare each character
  var standardized_word1 = word1.toLowerCase();
  console.log('The word standardized to lowercase is: ' + standardized_word1 + '.');

  // Transforming string into an array
  var word_array1 = Array.from(standardized_word1);
  console.log('The word (already standardized to lowercase) transformed into an array is: ');
  console.log(word_array1);

  // Check if the word (ARRAY standardized to lowercase) is a palindrome
  var check_palindrome1 = true;

  for (var i = 0; i < word_array1.length && check_palindrome1; i++) {
    var last_character1 = word_array1.length - (i+1);
    if (word_array1[i] !== word_array1[last_character1]) {
      check_palindrome1 = false;
    }
  }

  return check_palindrome1;
}

/*
// ### SOLUTION NUMBER 1 vers.2 - Comparing characters (STRING: without array) ###

// Check if the word (already standardized to lowercase) is a palindrome
function isPalindrome1(word1) {

  // Standardize the word to lowercase --> necessary to compare each character
  var standardized_word1 = word1.toLowerCase();
  console.log('The word standardized to lowercase is: ' + standardized_word1 + '.');

  // Check if the word (STRING standardized to lowercase) is a palindrome
  var check_palindrome1 = true;

  for (var i = 0; i < standardized_word1.length && check_palindrome1; i++) {
    var last_character1 = standardized_word1.charAt(standardized_word1.length - (i+1));
    if (standardized_word1.charAt(i) !== last_character1) {
      check_palindrome1 = false;
    }
  }

  return check_palindrome1;
}
*/

// ### SOLUTION NUMBER 2 - Comparing reversed word (with array) ###
function isPalindrome2(word2) {

  // Standardize the word to lowercase --> necessary for comparison
  var standardized_word2 = word2.toLowerCase();
  console.log('The word standardized to lowercase is: ' + standardized_word2 + '.');

  // Transforming string into an array
  var word_array2 = standardized_word2.split(''); // parameter: empty string as a separator
  console.log('The word (already standardized to lowercase) transformed into an array is: ');
  console.log(word_array2);

  // Reverse the array (to reverse the characters creating a new word)
  var reversed_word_array2 = word_array2.reverse();
  console.log('The reversed word array is: ');
  console.log(reversed_word_array2);

  // Transforming reversed array into a string to obtain the reversed word
  var reversed_word = reversed_word_array2.join('');  // parameter: empty string as a separator
  console.log('The reversed word is: ' + reversed_word + '.');

  // Check if the word is a palindrome --> comparison between original word (to lowercase) and reversed word
  if (standardized_word2 === reversed_word) {
    var check_palindrome2 = true;
  } else {
    check_palindrome2 = false;
  }

  return check_palindrome2;
}


// ******************** EXERCISE NUMBER 2. ODD OR EVEN? ********************
console.log('*** EXERCISE NUMBER 2. ODD OR EVEN? ***');
console.log('');

// Variables and constants initialization: player's number
const minimum_number = 1;
const maximum_number = 5;
var player_name = prompt('Enter your name.');
console.log('Player: ' + player_name + ' VS the computer.');
var player_number = parseFloat(prompt('Enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.'));

// Check valid input: player's number - OPTIMIZED SOLUTION (only While loop)
while (isNaN(player_number) || player_number < minimum_number || player_number > maximum_number) {
  alert('ERROR. The value you entered is invalid.');
  player_number = parseFloat(prompt('Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.'));
  console.log('ERROR. The value you entered is invalid. Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.');
}
console.log('The number you entered is: ' + player_number + '.');

/*
// Check valid input: player's number - SOLUTION While loop & If
var check_valid_number = false;
while (check_valid_number === false) {
  if (!isNaN(player_number) && player_number >= minimum_number && player_number <= maximum_number) {
    console.log('The number you entered is: ' + player_number + '.');
    check_valid_number = true;
  } else {
    alert('ERROR. The value you entered is invalid.');
    player_number = parseFloat(prompt('Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.'));
    console.log('ERROR. The value you entered is invalid. Please enter a number ranging from ' + minimum_number + ' to ' + maximum_number + '.');
  }
}
*/

// Variables initialization: player's guess (odd or even)
var player_guess = prompt('What is your guess? Choose between \'odd\' or \'even\'.').toLowerCase();

// Check valid input: player's guess
while (player_guess !== 'odd' && player_guess !== 'even') {
  alert('ERROR. The value you entered is not valid.');
  player_guess = prompt('Please enter \'odd\' or \'even\'.').toLowerCase();
}
console.log('The player\'s guess is: ' + player_guess + '.');

// Generating random number: computer's number (with function)
var pc_number = randomNumber(minimum_number, maximum_number);
console.log('The computer\'s number is: ' + pc_number + '.');

// Calculating Sum (with function)
var sum = sumNumbers(player_number, pc_number);
console.log('The sum of the two numbers is: ' + sum + '.');

// Check the winner (with function)
var winner = isWinner(player_guess, sum, player_name);
if (winner === 'computer') {
  alert('The winner is: the ' + winner + '!');
  // Print winner in HTML
  document.getElementById('winner-identity').innerHTML = 'the ' + winner;
} else {
  alert('The winner is: ' + winner + '!');
  document.getElementById('winner-identity').innerHTML = winner;
}


// --------------------- Print Output in HTML ---------------------

// Print player name
var print_player_name = document.getElementsByClassName('player-name');
for (i = 0; i < print_player_name.length; i++) {
  print_player_name[i].innerHTML = player_name;
}
// Print player's number
document.getElementById('player-number').innerHTML = player_number;
// Print player's guess
document.getElementById('player-guess').innerHTML = player_guess;
// Print computer's guess
document.getElementById('pc-number').innerHTML = pc_number;
// Print sum
document.getElementById('sum-result').innerHTML = sum;

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
function isOdd(number){
  if (number % 2) {
    // If the number is odd it returns "true"
    return true;
  } else {
    // If the number is even it returns "false"
    return false;
  }
}

// ***** FUNCTION: Check the Winner *****
function isWinner(player_guess, guess_element, player) {
  // Check player's guess: transforming into boolean variable (for comparison)
  if (player_guess === 'odd') {
    var check_player_guess = true;
  } else if (player_guess === 'even') {
    check_player_guess = false;
  }
  // Check if Sum is odd or even (with function)
  var check_guess_element = isOdd(guess_element);
  if (check_guess_element) {
    console.log('The sum is odd.');
    // Print output in HTML
    document.getElementById('check-odd').innerHTML = 'odd';
  } else {
    console.log('The sum is even.');
    // Print output in HTML
    document.getElementById('check-odd').innerHTML = 'even';
  }
  // Comparison between player's guess (boolean) and sum (boolean)
  if (check_player_guess && check_guess_element) {
    var guess_winner = player;
    console.log('You won! The sum is odd.');
  } else if (!check_player_guess && !check_guess_element) {
    guess_winner = player;
    console.log('You won! The sum is even.');
  } else if (check_player_guess && !check_guess_element) {
    guess_winner = 'computer';
    console.log('You lose! The sum is even and the computer won.');
  } else if (!check_player_guess && check_guess_element) {
    guess_winner = 'computer';
    console.log('You lose! The sum is odd and the computer won.');
  }
  return guess_winner;
}
