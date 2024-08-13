import { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { RowProps } from './Row';
import { Movie } from './Row';

function MovieCategories({ title, fetchURL, setHomePage }: RowProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(fetchURL);
      setMovies(res.data.results);
      console.log(res.data.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchURL]);

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '20px',
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    focusOnSelect: true,
    variableWidth: true,
    afterChange: (current: number) => setSelectedMovie(movies[current]),
  };

  return (
    <div className="movie-categories-container" style={{
      backgroundImage: selectedMovie ? `url(${import.meta.env.VITE_APP_API_URL}${selectedMovie.poster_path})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="header-carousel">
        <h2>{title}</h2>
        <button onClick={() => setHomePage(true)}>Back</button>
      </div>
      <div className="movie-categories-content">
        <div className="movie-info-panel">
            {selectedMovie && (
              <>
                <span className="movie-title">{selectedMovie?.title || selectedMovie?.name}</span>
                <p className="movie-description">{selectedMovie?.overview || 'No description available.'}</p>
                <span>Popularity: {selectedMovie?.popularity}</span>
                <button>Trailer</button>
              </>
            )}
          </div>
        <div className="movie-carousel-container">
          {movies.length > 0 && (
            <Slider className="movie-carousel-slider" {...settings}>
              {movies.map((movie) => (
                <div key={movie.id} className="movie-carousel-slide">
                  <img
                    src={`${import.meta.env.VITE_APP_API_URL}${movie?.poster_path}`}
                    alt={movie?.title || movie?.name || 'Movie Poster'}
                    className="movie-carousel-image"
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCategories;
