import {React, useState} from 'react';
import SearchMovie from './components/SearchMovie';
import MovieGrid from './components/MovieGrid';
import {MainPage} from './components/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {MovieDetails} from './components/MovieDetails';
import Error404 from './components/Error404';
import Footer from './components/Footer';

const MovieDBApp = () => {

  const [movie, setMovies] = useState([]);

  console.log('movie es: ', movie)
  
  return (
    <>
    <Router>
      <header className='banner'>
      <div className='sitebanner'><Link to='/' style={{textDecoration: 'none'}}><h2 className='sitebanner'>MovieDBApp</h2></Link></div>
      </header>
        <Switch>
          <Route exact path='/'>
          <div className='searchbar'><SearchMovie setMovies={setMovies}/></div>
            <MainPage/> 
            <footer>
          <Footer/>
        </footer>
          </Route>
          <Route exact path='/movies/:movieID'>
            <MovieDetails/>
          </Route>
          <Route path='/search/:movie'>
            <MovieGrid movie={movie}/>
          </Route>
          <Route path='/'>
          <Error404/>
          </Route>
        </Switch>
      </Router>
   </>
  );
}

export default MovieDBApp;
