export const GetMovies = async (movie) => { 

//  let moviename = document.getElementById('searchvalue').value;

    const url = `https://api.themoviedb.org/3/search/movie?api_key=d32276a5408fa468e24382a0889edd27&language=en-US&query=${encodeURI(movie)}`;
    const resp = await fetch(url);
    const data = await resp.json();
    var result = [];

    console.log('Llamado desde GetMovies.js ',movie)
    
    for(var i in data)
    result.push([i, data[i]]);

    var checklist1 = result[1];
    var checkfinalist = checklist1[1];

    const pelicula = checkfinalist.map(movie => {
    return {
        id: movie.id,
        title: movie.title,
        poster: movie.poster_path,
        genre_ids: movie.genre_ids,
        vote_average: movie.vote_average,
        original_language: movie.original_language,
        overview: movie.overview,
        release_date: movie.release_date,
    }
   });   
 return pelicula;
}