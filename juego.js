
// Generar un número aleatorio entre 1 y 100
var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var intentos = 0;

function adivinarNumero() {
    var guess = document.getElementById("guessInput").value;
    intentos++;

    if (guess == numeroSecreto) {
        document.getElementById("resultado").innerHTML = "¡Adivinaste el número en " + intentos + " intentos!";
    } else if (guess < numeroSecreto) {
        document.getElementById("resultado").innerHTML = "El número secreto es mayor. Intenta nuevamente.";
    } else {
        document.getElementById("resultado").innerHTML = "El número secreto es menor. Intenta nuevamente.";