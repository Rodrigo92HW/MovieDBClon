import React, { useState, useEffect } from 'react'
import {GetMovies} from './helpers/GetMovies';
import MovieCardSearch from './MovieCardSearch';


const MovieGrid = ({movie}) => {

    const [ movpel, setPelis] = useState([])

    useEffect(() => {
        GetMovies(movie[0])
        .then(setPelis)
    }, [movie[0]])

    return (
        <div className="card-grid-search">
        <div className='movie-search'>{movie[0]}</div>
        <div className='movie-search-map'>
                {movpel.map((pelis) => (
                    <MovieCardSearch 
                     key={pelis.id}
                     {...pelis}
                    />
                ))}
                </div>
        </div>
     );
}
 
export default MovieGrid;