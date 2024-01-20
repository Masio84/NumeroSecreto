/*alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
*/
//Variables
let numeroSecreto = Math.floor(Math.random()*100)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraTurno = "turno";
console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 100 por favor:"));
    console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/

if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1? "turno" : "turnos"}`); 
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es MENOR");
        } else {
            alert("El número secreto es MAYOR");
        }
        //La condición no se cumplió
        intentos = intentos + 1;
        //palabraTurno = "turnos";
        if (intentos > 15) {
            alert("Llegaste al número de intentos máximo.");
            break;
        }

        //alert('Lo siento, no acertaste el número. Intentalo otra vez');
    }
}