import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion'


function App() {
  const [movies, setMovies] = useState([]);
  const [filterd, setFiltred] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchMovie = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8d6b822e18eb7024b368b88a6435c28f&language=en-US&page=1');
    const movies = await data.json();
    setMovies(movies.results)
    setFiltred(movies.results)
  }

  useEffect(() => {
    fetchMovie();
  }, [])

  return (
    <div className="App">
      <Filter data={movies} activeGenre={activeGenre} setActiveGenre={setActiveGenre} setFiltred={setFiltred} />
      <motion.div className='popular-movies'>
        <AnimatePresence>
          {filterd.map((movie) => <Movie key={movie.id} data={movie} />)}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
