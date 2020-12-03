import { CommandList } from './CommandList.js';
// use command pattern to add new buttons
//import { Calculator, CommandsList } from './command-test.js';

// Get the form by class and input elements by id
let form = document.querySelector('.form');
let first_number = document.getElementById('first-number');
let second_number = document.getElementById('second-number');

// get the 'result' display element by class
let result = document.querySelector('.result');

// Listen to 'submit' event and trigger addition
form.addEventListener('submit', (event) => {
   // const command = new Calculator();
   // command.execute(CommandsList('add', 'toto'));
   event.preventDefault();
   let a = first_number.valueAsNumber;
   let b = second_number.valueAsNumber;

  // Calculating sum
   let sum = CommandList(a, b);

  // Printing result
   result.textContent = `Bien joué 👋, le total est : ${sum}`;
} )
