import React, {useState,  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieCardFull from './MovieCardFull';

export function MovieDetails () {

    const [movies, setMovies] = useState([])

    const {movieID} = useParams()

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=d32276a5408fa468e24382a0889edd27`, {
            headers: {
                Authorization: 
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzIyNzZhNTQwOGZhNDY4ZTI0MzgyYTA4ODllZGQyNyIsInN1YiI6IjYwZGJlYzFiY2I5ZjRiMDAyYmQ4YTliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VGbRrU3qSYSQhBs3UKZ0rwFId2LHI80AFuALNLzr_U',
            'Content-Type': 'application/json;charset=utf-8',
            }
        }).then(result => result.json())
        .then(data => {
        setMovies([data]);
        })
    }, [])

    return (
        <>
                {movies.map((pelis) => (
                    <MovieCardFull 
                     key={pelis.id}
                     {...pelis}
                    />
                ))}
        </>
     );
}