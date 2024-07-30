const requests = {
    fetchNetflixOriginals:import.meta.env.VITE_APP_BASE_URL+`/discover/tv?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&with_networks=213`,
    fetchTrending:import.meta.env.VITE_APP_BASE_URL+`/trending/all/week?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&language=en-US`,
    fetchTopRated:import.meta.env.VITE_APP_BASE_URL+`/movie/top_rated?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&language=en-US`,
    fetchActionMovies:import.meta.env.VITE_APP_BASE_URL+`/discover/movie?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&with_genres=28`,
    fetchComedyMovies:import.meta.env.VITE_APP_BASE_URL+`/discover/movie?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&with_genres=35`,
    fetchHorrorMovies:import.meta.env.VITE_APP_BASE_URL+`/discover/movie?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&with_genres=27`,
    fetchRomanceMovies:import.meta.env.VITE_APP_BASE_URL+`/discover/movie?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&with_genres=10749`,
    fetchDocumentaries:import.meta.env.VITE_APP_BASE_URL+`/discover/movie?api_key=${
      import.meta.env.VITE_APP_API_KEY
    }&with_genres=99`,
  };

  export default requests