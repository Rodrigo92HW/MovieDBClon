import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const SearchMovie = ({setMovies}) => {

    let [inputValue, setInputValue] = useState('');
    const history = useHistory();
    

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 1) {
            setMovies( movies => [ inputValue, ...movies, ] );
            setInputValue('');
          }
          history.push('/search/' + inputValue);
    }

    return ( 
        <>
        <div className='searchmovie'>
        <h3 className='welcome'>Bienvenido a MovieDBApp Clon!</h3>
        <p className='welcome'>Su clon o replica favorita de tu sitio web para API más popular!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" className='search' value={inputValue} onChange={handleInputChange}/>
                <button className="search" type="submit">Buscar</button>
            </form>
        </div>
        </>
     );
}
 
export default SearchMovie;