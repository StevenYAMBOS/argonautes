// Importation des fonctions du SDK Firebase (récupérés depuis la Doc)
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Paramètres de la base de données Firebase (Doc Firebase)
const firebaseConfig = {
    apiKey: "AIzaSyBY8k6ZLT7gmCjtmQ-wHXXOu76o1JliKr8",
    authDomain: "les-argonautes-4f408.firebaseapp.com",
    databaseURL: "https://les-argonautes-4f408-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "les-argonautes-4f408",
    storageBucket: "les-argonautes-4f408.appspot.com",
    messagingSenderId: "533621827099",
    appId: "1:533621827099:web:09161d238a7cceb19d3abe"
  };

//Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialise la base de données en temps réel et obtient une référence au service (Doc Firebase)
const database = getDatabase();

// Références
const username = document.getElementById('username').value;
const button = document.getElementById('submit');

// Fonction qui va servir à créer la branche "Argonautes" dans la BDD où le nom du nouveau membre sera stocké
function add(){
  set(ref(database, 'Argonautes/' + username), {
    username: username,
    })
    .then(()=>{
        alert('Bienvenu à bord !');
    })
    .catch((error)=>{
        alert("Tu n'es pas avec nous !" + error);
    });
}

// Ajout d'un évènement au bouton "Ajouter"
button.addEvenListener('click', add);






/*
Succès :
- Installation de Wamp
- Installation de phpMyAdmin 
- Création de la base de données avec phpMyAdmin
- Création de la base de données avec Firebase */

/*
Échecs :
- Configuration de PHP
- Connection aux base de données
- Écrire et lire des données */

  
    