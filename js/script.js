$('documen').ready(function() {

    // Esercizio 1
    /*
    Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
    Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
    */

    var student = {
        nome: 'Giovanni',
        cognome: 'Olivieri',
        age: 30,
        gender: 'M',
        BooleanStudent: true,
    };

    for (var key in student) {
        console.log(student[key]);
    }


    // Esercizio 2
    /*
    Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
     */

    var students = [
        {
            nome: 'Giovanni',
            cognome: 'Olivieri',
            age: 30,
        },
        {
            nome: 'Paolo',
            cognome: 'Duzioni',
            age: 30,
        },
        {
            nome: 'Andrea',
            cognome: 'Baronchelli',
            age: 32,
        },
        {
            nome: 'Prisco',
            cognome: 'Coppola',
            age: 26,
        },
        {
            nome: 'Giuseppe',
            cognome: 'Mandriani',
            age: 31,
        },
    ];

    for (var i = 0; i < students.length; i++) {
        console.log(`Studente ${i+1}: ${students[i].nome} ${students[i].cognome}`);
    }


    // Esercizio 3
    /*
    3- Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente 
        inserendo nell’ordine: nome, cognome e età. 
        Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
    */

    var userNome = prompt('Inserisci nome');
    var userCognome = prompt('Inserisci cognome');
    var userAge = prompt('Inserisci la tua età');

    var user = {
        nome: userNome,
        cognome: userCognome,
        age: userAge,
    }

    students.push(user);
    console.log('-----------------lista dopo aggiunta utente------------');
    for (var i = 0; i < students.length; i++) {
        console.log(`Studente ${i+1}: ${students[i].nome} ${students[i].cognome}, età ${students[i].age} anni`);
    }
    

    
    //end document ready
})