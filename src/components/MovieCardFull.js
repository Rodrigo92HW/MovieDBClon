import React from 'react';

const MovieCardFull = ({title, poster_path, genres, vote_average, original_language, release_date, overview, backdrop_path}) => {
  

    const genresArr = [];

    genres.forEach((genre) => {
    if (genre.name) {
      genresArr.push(genre.name);
    }
  });

    const genre = genresArr.slice(0, 10);
    const genreStr = genre.toString();
    const genero = genreStr.split('');

    let vote = vote_average * 10;

    let vote_color = ''

    if (vote_average <= 0) {
        vote = '-'
        vote_color = 'grey'
    }
    else if (vote > 89) {
        vote_color = 'darkgreen';
    } 
    else if (vote > 79) {
        vote_color = 'green';
    } 
    else if (vote > 69) {
        vote_color = 'lightgreen';
    } 
    else if (vote > 59) {
        vote_color = 'yellowgreen';
    } 
    else if (vote > 49) {
        vote_color = 'yellow';
    } 
    else if (vote > 39) {
        vote_color = 'tomato';
    }
    else if (vote > 29) {
        vote_color = 'red';
    }

    return ( 
        <>
        <div className='card-full'>
            <div className='img_rate-full'><img className='poster-full' src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + poster_path} alt={title}/>
            <div className='img_rate-full rate' style={{backgroundColor: vote_color}}>{vote}</div></div>
            <div className='title-full'><p>Titulo:</p>{title}</div>
            <div className='genre-full'><p>Generos:</p>{genero}</div>
            <div className='language-full'><p>Lenguaje:</p>{original_language}</div>
            <div className='date-full'><p>Estreno:</p>{release_date}</div>
            <div className='overview-full'><p>Descripción:</p>{overview}</div>
        </div>
        <img className='background-full' src={'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/' + backdrop_path} alt=''></img>
        </>
     );
}
 
export default MovieCardFull;