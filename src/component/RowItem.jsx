import React from 'react';

function RowItem({ movie, setMovieVisibility, setTrailerMovies }) {
  const handleMovieVisibility = () => {
    setTrailerMovies(movie);
    setMovieVisibility(true);
  };

  return (
    <>
      <img 
        src={`${import.meta.env.VITE_APP_API_URL}${movie?.poster_path}`} 
        alt="" 
        className='carousel-image'
        onClick={handleMovieVisibility}  
      />
      <span className='carousel-title'>{movie?.title || movie?.name}</span>
    </>
  );
}

export default RowItem;
