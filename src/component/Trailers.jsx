import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Trailers({ movie, setMovieVisibility }) {
  const [videoUrl, setVideoUrl] = useState(null);
  console.log(movie)
  const ops = {
    height: '398',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailerVisibility = () => {
    setVideoUrl(null)
    setMovieVisibility(false);
  };

  const fetchVideo = async () => {
    if (movie.title || movie.name) {
      try {
        // movieTrailer kullanarak fragmanı buluyoruz
        const url = await movieTrailer(movie.title || movie.name);
        setVideoUrl(url);
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    }
  };

  useEffect(() => {
    fetchVideo();
  }, [movie]);

  return (
    <div className='trailer-container'>
      <span onClick={handleTrailerVisibility} className='off-btn'>X</span>
      {videoUrl ? (
        <YouTube videoId={new URL(videoUrl).searchParams.get('v')} opts={ops} className='trailer-box'/>
      ) : (
        <p>No videos available.</p>
      )}
      <h3>Movie Description</h3>
      <span>{movie?.overview}</span>
    </div>
  );
}

export default Trailers;
