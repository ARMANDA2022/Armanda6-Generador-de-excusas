/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Aqui empieza mi codigo

//creo mis variables con el texto que quiero que salga

const who = ["The dog", "My grandma", "An alien", "My neighbor"];
const action = ["ate", "broke", "stole", "hid"];
const what = ["my homework", "the keys", "the car", "my shoe"];
const when = [
  "this morning",
  "last night",
  "a while ago",
  "while I was sleeping"
];

//crear la funcion para que genere la excusa random
function generateExcuse() {
  let whoExcusa = who[Math.floor(Math.random() * who.length)];
  let actionExcusa = action[Math.floor(Math.random() * action.length)];
  let whatExcusa = what[Math.floor(Math.random() * what.length)];
  let whenExcusa = when[Math.floor(Math.random() * when.length)];

  //creo variable nueva y la pongo igual a las variables que tiene mi función. para que se genere la excusa

  let fraCompleta =
    whoExcusa + " " + actionExcusa + " " + whatExcusa + " " + whenExcusa;
  document.querySelector("#palabras").innerHTML = fraCompleta;
}

window.onload = function() {
  //Creo mi boton para cuando haga click en el genere la excusa
  const miBoton = document.getElementById("miBotonpalabras");
  miBoton.addEventListener("click", generateExcuse);

  // Generar una excusa inicial al cargar la página
  generateExcuse();
};
