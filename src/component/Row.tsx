import axios from 'axios';
import { useEffect, useState } from 'react';
import RowItem from './RowItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Trailers from './Trailers';
import { NavLink } from 'react-router-dom';

// Movie ve RowProps türlerini tanımlıyoruz
export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  overview?: string;
  [key: string]: any; // Geriye kalan özellikler için dinamik bir tür
}

export interface RowProps {
  title: string;
  fetchURL: string;
  setHomePage: React.Dispatch<React.SetStateAction<boolean>>;
}

function Row({ title, fetchURL, setHomePage }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerMovie, setTrailerMovies] = useState<Movie | null>(null);
  const [movieVisibility, setMovieVisibility] = useState<boolean>(false);

  const fetchData = async () => {
    try {
      const res = await axios.get(fetchURL);
      setMovies(res.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
  const handleShowPage=()=>{
    setHomePage(false)
  }
  return (
    <div>
      <div className='title-header'>
        <h2>{title}</h2>
        <NavLink to={`/${title}`} onClick={handleShowPage}>(More İnformation)</NavLink>
      </div>
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
