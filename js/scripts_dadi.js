// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:



// numeroRandomPc = document.getElementById('numero_pc');
// numeroRandomUtente = document.getElementById('numero_user');


let button = document.getElementById('button');
let numeroRandomPc = document.getElementById('numero_pc');
let numeroRandomUtente = document.getElementById('numero_user');

button.addEventListener("click" , function (){
    let numeroRandomPc = Math.floor (Math.random() * (7-1))+1;

    console.log("Numero del pc ", numeroRandomPc);
    numero_pc.innerHTML = ' il computer ha ottenuto un punteggio di:' + numeroRandomPc;
    let numeroRandomUtente = Math.floor (Math.random() * (7-1))+1;
    numero_user.innerHTML = ' Hai ottenuto un punteggio di:' + numeroRandomUtente;


    console.log ("Numero dell'user", numeroRandomUtente);

    if ( numeroRandomUtente > numeroRandomPc){
        alert ('Hai vinto un bel niente')
    }
    else{
        alert ('Hai perso tutto')
    }
});


numeroUtente.innerHTML = 'IL tuo dado è: ' + userNumber; 