import React, {useState,  useEffect } from 'react'
import MovieCard from './MovieCard';

export function MainPage () {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie', {
            headers: {
                Authorization: 
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzIyNzZhNTQwOGZhNDY4ZTI0MzgyYTA4ODllZGQyNyIsInN1YiI6IjYwZGJlYzFiY2I5ZjRiMDAyYmQ4YTliMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1VGbRrU3qSYSQhBs3UKZ0rwFId2LHI80AFuALNLzr_U',
            'Content-Type': 'application/json;charset=utf-8',
            }
        }).then(result => result.json())
        .then(data => {
            setMovies(data.results);
        })
    }, [])

    return (
        <div className="main-card-grid">
                {movies.map((pelis) => (
                    <MovieCard 
                     key={pelis.id}
                     {...pelis}
                    />
                ))}
        </div>
     );
}

