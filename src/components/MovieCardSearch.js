import React from 'react';
import { Link } from 'react-router-dom';

const MovieCardSearch = ({title, poster, vote_average, id}) => {

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
        <Link to={'/movies/' + id}>
        <div className="card">
        <div className='img_rate'><img className='poster' src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2' + poster} alt={title}/>
        <div className='img_rate rate' style={{backgroundColor: vote_color}}>{vote}</div></div>
        </div>
        </Link>
     );
}
 
export default MovieCardSearch;