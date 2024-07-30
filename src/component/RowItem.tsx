import React from 'react';

// Movie türünü tanımlıyoruz
interface Movie {
  id: number;
  poster_path?: string;
  title?: string;
  name?: string;
  [key: string]: any; // Diğer özellikler için dinamik bir tür
}

// RowItem bileşeninin props türlerini tanımlıyoruz
interface RowItemProps {
  movie: Movie;
  setMovieVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setTrailerMovies: React.Dispatch<React.SetStateAction<Movie | null>>;
}

const RowItem: React.FC<RowItemProps> = ({ movie, setMovieVisibility, setTrailerMovies }) => {
  const handleMovieVisibility = () => {
    setTrailerMovies(movie);
    setMovieVisibility(true);
  };

  return (
    <>
      <img 
        src={`${import.meta.env.VITE_APP_API_URL}${movie?.poster_path}`} 
        alt={movie?.title || movie?.name || 'Movie Poster'} 
        className='carousel-image'
        onClick={handleMovieVisibility}  
      />
      <span className='carousel-title'>{movie?.title || movie?.name}</span>
    </>
  );
}

export default RowItem;
