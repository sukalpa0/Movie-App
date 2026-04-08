async function getMovie(movie) {
    try{
    let response = await fetch (`http://www.omdbapi.com/?t=${movie}&apikey=4c37f3c9`);
    let data = await response.json();
    updateMovieDetails(data);
    }catch(error){
        console.log("error fetching data",error);
    }

}

function updateMovieDetails(movieData){

    document.getElementById("title").innerText=movieData.Title;
    document.getElementById("year").innerText=movieData.Year;
    document.getElementById("rating").innerText=movieData.imdbRating;
    document.getElementById("duration").innerText=movieData.Runtime;
    document.getElementById("genre").innerText=movieData.Genre;
    document.getElementById("director").innerText=movieData.Director;
    document.getElementById("stars").innerText=movieData.Actors;
    document.getElementById("poster").src=movieData.Poster;

}                       
getMovie("The Nun");

document.getElementById("button").addEventListener("click", function(){
    let userInput = document.getElementById("searchBox").value;
    getMovie(userInput);
})