import React, { useEffect, useState } from 'react';
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

// Movie ve TrailersProps türlerini tanımlıyoruz
interface Movie {
  title?: string;
  name?: string;
  overview?: string;
}

interface TrailersProps {
  movie: Movie;
  setMovieVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const Trailers: React.FC<TrailersProps> = ({ movie, setMovieVisibility }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const ops = {
    height: '398',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleTrailerVisibility = () => {
    setVideoUrl(null);
    setMovieVisibility(false);
  };

  const fetchVideo = async () => {
    const query = movie.title || movie.name;
    if (query) {
      try {
        const url = await movieTrailer(query);
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
      <h2>{movie?.title||movie?.name}</h2>
      {videoUrl ? (
        <YouTube videoId={new URL(videoUrl).searchParams.get('v') || ''} opts={ops} className='trailer-box'/>
      ) : (
        <p>No videos available.</p>
      )}
      <h3>Movie Description</h3>
      <span>{movie?.overview || 'No overview available.'}</span>
    </div>
  );
}

export default Trailers;
