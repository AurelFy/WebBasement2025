"use strict";

// Décalaration des variabls nécéssaires
var form = document.querySelector('.search--form')
var inputText = document.querySelector('.search--form__input');
var movies = [];
var details = []; 
 
var url = "";

var urlDetails = ""; 
 
// Ecoute du click 
form.addEventListener('submit', function(e){
    // e contient les infos de l'evenement 
    e.preventDefault(); 
    // remplacer les " " du input par des "-"
    
    // définition de la premiere url
    url = 'https://web.mayfly.ovh/proxy/moviev2.php?endpoint=search/movie&query=' + inputText.value ;
    console.log(url);
    
    // Appel de la fonction fetchData
    fetchData();
});

// création fonction fetchData pour fetch l'url 
function fetchData (){
    fetch(url)
    // appel de l'API
        .then(function(response){
            return response.json();
        })
 
        .then(function(data){
            // stocker les données 
            movies = data;
            console.log(movies);
            // appelle la fonction + data en () pour qu'il le reconnaisse
            displayResults(data);
            
            //message d'erreur si pas de résultats
            if (data.total_results == 0){
                console.log('Error')
            }
 
           
        })
   
}
 
function displayResults(data) {
    var resultsContainer = document.querySelector('.card');
    // Vider le container pour affihcer les résultats
    resultsContainer.innerHTML = " ";
    
    // Pour chaque éléments dans le tableau de résultats 
    data.results.forEach(function(item) {

        // On crée un div pour chaque film 
        var movieItem = document.createElement('div');
        movieItem.classList.add('card--item');
        // ajout d'un id
        movieItem.setAttribute('data-movieid', item.id)
        
        // Création img pour chaque film 
        var movieImage = document.createElement('img');
        // ajout d'une classe
        movieImage.classList.add('card--item__img');
        // remplir l'img avec 'alt' et 'src'
        movieImage.src = 'https://image.tmdb.org/t/p/w500' + item.poster_path; 
        movieImage.alt = item.title;
        
        // Création h3 pour chaque film 
        var movieTitle = document.createElement('h3');
        // ajout d'une classe
        movieTitle.classList.add('card--item__title')
        // remplir le h3
        movieTitle.textContent = item.title;

        // ajouter l'img et le h3 dans la div 
        movieItem.appendChild(movieImage);
        movieItem.appendChild(movieTitle);
        
        // ajouter le container au container principal
        resultsContainer.appendChild(movieItem);

        // Ecoute du click sur la div du film 
        movieItem.addEventListener('click', function(){

            // Définition url détails + l'id du film 
            urlDetails = 'https://web.mayfly.ovh/proxy/moviev2.php?endpoint=movie/' + item.id; 
            
            // appel de la fonction fetchDetails
            fetchDetails(); 
            
        }); 
    });
}

// Création fonction fetchDetails
function fetchDetails (){
    fetch(urlDetails)
        .then(function(response){
            return response.json();
        })
        
        // Récupération des données 
        .then(function(dataId){
            details = dataId;
            console.log(details);

        // appelle la fonction + dataId en () pour qu'il le reconnaisse
        displayDetails(dataId); 
        

        })
   
}

function displayDetails(dataId){

    var movieDetails = document.querySelector('.card--item'); 

    // Créer une div detail que je remplis avec chaque élément que je veux

    var movieBudget = document.createElement('span')
        movieBudget.classList.add('card--item__budget')
        movieBudget.textContent = dataId.budget;
        movieDetails.appendChild(movieBudget); 

}


