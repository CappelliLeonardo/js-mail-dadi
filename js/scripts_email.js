

// - chiediamo all'user la sua email
// - creiamo una lista di email con le quali è possibile accedere
// - verifichiamo che la mail inserita sia contenuta nella nostra lista email
// - stampa messaggio con esito controllo 



let button = document.getElementById('button');

console.log(button);

const emailList = [
    "leonardo@gmail.com",
    "francesco@gmail.com",
    "mattia@gmail.com",
    "luca@gmail.com",
    "leonardo1@gmail.com",
    "leonardo2@gmail.com"
];

button.addEventListener("click" , function () {
    let userMail = document.getElementById ('usermail').value;

    let controllo = false;

    for (let i = 0; i < emailList.length; i++) {
        if(userMail == emailList[i]){
            controllo = true;

            // questa istruzione QUI SOTTO è questione di ottimizzazione.
            // Serve a forzare l'uscita dal ciclo ed evitare
            // inutili ricerche)

            i = emailList.length;   
        }
        console.log('valore' , emailList[i]) 
    }

    if (controllo == true){
        alert ("è stato un parto")
    }
    else{
        alert("non entra")
    }
}
);



