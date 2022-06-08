const tmdbKey = '1d140e1087a8635054593a84531f6ebd'; //Save the API key you obtained from the TMDB API to the tmdbKey variable. 
const tmdbBaseUrl = 'https://api.themoviedb.org/3'; //Check the TMDB documentation to find the API’s base URL, and save it to the tmdbBaseUrl variable.
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list'; //Check the TMDB documentation to find the “Genres” API endpoint. Create a variable called genreRequestEndpoint inside getGenres() and set it to the “Genres” API endpoint.
  const requestParams = `?api_key=${tmdbKey}`; //create a variable called requestParams and set it to a query string where the key is api_key and the value is tmdbKey
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`; //Create a variable called urlToFetch and set it to a string that consists of tmdbBaseUrl, followed by genreRequestEndpoint, followed by requestParams.
  try{
   const response = await fetch(urlToFetch); //fetch() to send a GET request to urlToFetch. Await the response and save it to a variable called response. We need to await the resolution of our fetch() call so that we can do something with the data we get back.
   if (response.ok){ //conditional statement that checks if the .ok property of the response object evaluates to a truthy value
     const jsonResponse = await response.json(); //we’ll capture the data that we need to populate our dropdown menu. To get the requested data, convert the response object to a JSON object. Await the resolution of this method and save it to a variable called jsonResponse
     //console.log(jsonResponse)
     const genres = jsonResponse.genres; //Save the genres property of jsonResponse in a variable called genres. Log this variable to the console to confirm that it contains the correct information
     //console.log(jsonResponse)
    return genres;
   }
  }catch (error){
    console.log(error);
    };
};


const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = '/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  try{
   const response = await fetch(urlToFetch);
   if (response.ok){
     const jsonResponse = await response.json();
     //console.log(jsonResponse)
     const movies = jsonResponse.results;
     //console.log(jsonResponse)
      return movies;
      } 
    }catch (error){
    console.log(error);
    }

};

const getMovieInfo = async (movie) => {

  const movieId = movie.id;
  const movieEndpoint = `/movie/${movieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try{
   const response = await fetch(urlToFetch);
   if (response.ok){
     const jsonResponse = await response.json();
     //console.log(jsonResponse)
     const movieInfo = jsonResponse;
     //console.log(jsonResponse)
      return movieInfo;
      } 
    }catch(error){
    console.log(error);
    }

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0){
    clearCurrentMovie();
  };
  const movies = await getMovies();
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);
  displayMovie(info);

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;