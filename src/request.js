const API_KEY = "2fffb72a7637fcf1f3bc82710e44c290";
const request = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
};

export default request;
