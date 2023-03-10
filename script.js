
//Login User required

function compilaCampiLogin() {
    if (document.getElementById('username').value == "") {
        alert("Imetti l'username");
        document.getElementById('username').focus();
        return false;

    }
    if (document.getElementById('password').value == "") {
        alert("Imetti la password");
        document.getElementById('password').focus();
        return false;

    }
}

//Index clea r form

function resetForum() {
    document.getElementById('cognome').value = '';
    document.getElementById('tipologiaConto').value = '';
    document.getElementById('idConto').value = '';
    document.getElementById('identificativoCliente').value = '';
    document.getElementById('nome').value = '';
    document.getElementById('codiceFiscale').value = '';
    document.getElementById('filiale').value = '';
    document.getElementById('data').value = '';
}




//Index nasconde e fa vedere i filtri di ricerca

function nascondiFiltri() {
    let mostra = document.getElementById("mioForm");
    if (mostra.style.display == "none" || mostra.style.display=== "") {
        mostra.style.display = "block";
    } else {
        mostra.style.display = "none";
    }
}


//Nuovo conto validazione campi

function validazioneNuovoConto() {
    if (document.getElementById('Nome').value == "") {
        alert("Imetti il nome");
        document.getElementById('Nome').focus();
        return false;

    }

    if (document.getElementById('Cognome').value == "") {
        alert("Imetti il cognome");
        document.getElementById('Cognome').focus();
        return false;

    }

    if (document.getElementById('codice_Fiscale').value == "") {
        alert("Imetti il codice fiscale");
        document.getElementById('codice_Fiscale').focus();
        return false;

    }

    if (document.getElementById('dataDiNascita').value == "") {
        alert("Imetti la data di nascita");
        document.getElementById('dataDiNascita').focus();
        return false;

    }

    if (document.getElementById('luogoDiNascita').value == "0") {
        alert("Imetti il luogo di nascita");
        document.getElementById('luogoDiNascita').focus();
        return false;

    }
    if (document.getElementById('numeroDocumento').value == "") {
        alert("Imetti il numero documento");
        document.getElementById('numeroDocumento').focus();
        return false;

    }

    if (document.getElementById('tipologiaDocumento').value == "0") {
        alert("Imetti la tipologia documento");
        document.getElementById('tipologiaDocumento').focus();
        return false;

    }

    if (document.getElementById('indirizzoResidenza').value == "") {
        alert("Imetti l'indirizzo di residenza");
        document.getElementById('indirizzoResidenza').focus();
        return false;

    }

    if (document.getElementById('tipologiaConto').value == "0") {
        alert("Imetti la tipologia conto");
        document.getElementById('tipologiaConto').focus();
        return false;

    }

    if (document.getElementById('filialeRiferimento').value == "0") {
        alert("Imetti la filiale di riferimento");
        document.getElementById('filialeRiferimento').focus();
        return false;
    }

    if(document.getElementById('dataDiNascita').value <= 01/01/2008){
        alert("Sei troppo piccolo per avere un conto");
        return false;
    }
        
    const codiceFiscaleRegex = /^[A-Z]{6}[0-9]{2}[A-Z]{1}[0-9]{2}[A-Z]{1}[0-9]{3}[A-Z]{1}$/;

    const codiceFiscale = document.getElementById('codice_Fiscale').value;
    const isValid = codiceFiscaleRegex.test(codiceFiscale);
    console.log(isValid);
    if (!isValid ){
        alert("Codice fiscale non valido!");
        document.getElementById('codice_Fiscale').focus();
        return false;
    }// true se il codice fiscale è valido, false altrimenti


   

if (age >= 14 && age <= 18) {
myMoneyOption.disabled = true;
myMoneyJuniorOption.disabled = false;
productSelect.value = "my_money_junior";
} else if (age > 18) {
myMoneyOption.disabled = false;
myMoneyJuniorOption.disabled = true;
productSelect.value = "my_money";
} else {
myMoneyOption.disabled = false;
myMoneyJuniorOption.disabled = false;
}
};

function calculateAge(birthdate) {
const today = new Date();
let age = today.getFullYear() - birthdate.getFullYear();
const monthDiff = today.getMonth() - birthdate.getMonth();

if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
age--;
}

    

}



function tiplologiaConto(){
 let eta = 17;
 if(eta < 14){
    console.log("Non puoi avere un conto");
 }if(eta == 14 || eta == 15 || eta == 16 || eta == 17 || eta == 18){
    console.log("Conto my money Junior");
 }if(eta >= 18){
    console.log("Conto money");
 }
 
}



