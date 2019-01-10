import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Haiku } from './haiku.js';

let buttonElement = document.getElementById("button");
let userInputElement = document.getElementById("userInput");

buttonElement.addEventListener("click", captureInput);

function captureInput() {
  let userInput = userInputElement.value;
  let haiku = new Haiku(userInput);
  console.log(haiku.hasFiveSevenFive());
  haiku.hasFiveSevenFive();
}



