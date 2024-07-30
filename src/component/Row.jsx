import axios from 'axios';
import { useEffect, useState } from 'react';
import RowItem from './RowItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Trailers from './Trailers';

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [trailerMovie, setTrailerMovies] = useState(null);
  const [movieVisibility, setMovieVisibility] = useState(false);

  const fetchData = async () => {
    const res = await axios.get(fetchURL);
    setMovies(res.data.results);
  };

  useEffect(() => {
    fetchData();
  }, [fetchURL]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <h2 className='title-header'>{title}</h2>
      {movieVisibility && trailerMovie && (
        <Trailers 
          movie={trailerMovie} 
          setMovieVisibility={setMovieVisibility} 
        />
      )}
      {movies.length > 0 && (
        <Carousel responsive={responsive}>
          {movies.map((movie) => (
            <div key={movie.id} className='carousel'>
              <RowItem 
                movie={movie} 
                setMovieVisibility={setMovieVisibility} 
                setTrailerMovies={setTrailerMovies} 
              />
            </div>
          ))}
        </Carousel>
      )}
      
    </div>
  );
}

export default Row;
