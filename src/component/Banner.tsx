import axios from 'axios';
import {useEffect,useState} from 'react';
import requests from '../API/requests.js'
import { Movie } from '../type/index.js';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';

function Banner() {
  const [movie,setMovie]= useState<Movie|null>();
  const fetchData=async ()=>{
    const res = await axios.get(requests.fetchNetflixOriginals)
    const randomMovie = Math.floor(Math.random()* res.data.results.length);
    setMovie(res.data.results[randomMovie])
  }
  
  useEffect(() => {
    fetchData();
  }, [])  
  
  return (
    <div className='banner' style={{
      backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path}*)`
    }}>
      <div className="banner-content">
        <h2 className='banner-title'>{movie?.name}</h2>
        <div className="banner-buttons">
          <button className="banner-button play"><PlayArrowIcon/> Play</button>
          <button className="banner-button info"><InfoIcon/> More İnformation </button>  
        </div>
        <div className='banner-description'>
          <span >{movie?.overview}</span>
        </div>
      </div>
    </div>
  )
}

export default Banner
