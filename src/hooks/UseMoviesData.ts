import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../utils/requests";
import { Movie } from "../typings";

interface MovieData {
  trending: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
  netflixOriginals: Movie[];
}

const useMovieData = (): MovieData => {
  const [netflixOriginals, setNetflixOriginals] = useState<Movie[]>([]);
  const [trending, setTrending] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [actionMovies, setActionMovies] = useState<Movie[]>([]);
  const [comedyMovies, setComedyMovies] = useState<Movie[]>([]);
  const [horrorMovies, setHorrorMovies] = useState<Movie[]>([]);
  const [romanceMovies, setRomanceMovies] = useState<Movie[]>([]);
  const [documentaries, setDocumentaries] = useState<Movie[]>([]);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function fetchData() {
      try {
        const responseArray = await Promise.all([
          axios.get(requests.fetchTrending, { cancelToken: source.token }),
          axios.get(requests.fetchTopRated, { cancelToken: source.token }),
          axios.get(requests.fetchActionMovies, { cancelToken: source.token }),
          axios.get(requests.fetchComedyMovies, { cancelToken: source.token }),
          axios.get(requests.fetchHorrorMovies, { cancelToken: source.token }),
          axios.get(requests.fetchRomanceMovies, { cancelToken: source.token }),
          axios.get(requests.fetchDocumentaries, { cancelToken: source.token }),
          axios.get(requests.fetchNetflixOriginals, {
            cancelToken: source.token,
          }),
        ]);

        setTopRated(responseArray[1].data.results);
        setTrending(responseArray[0].data.results);
        setTopRated(responseArray[1].data.results);
        setActionMovies(responseArray[2].data.results);
        setComedyMovies(responseArray[3].data.results);
        setHorrorMovies(responseArray[4].data.results);
        setRomanceMovies(responseArray[5].data.results);
        setDocumentaries(responseArray[6].data.results);
        setNetflixOriginals(responseArray[6].data.results);
      } catch (error) {
        if (axios.isCancel(error)) {
          // Request was canceled
        } else {
          // Handle other errors
          console.log(error);
        }
      }
    }

    fetchData();
    return () => {
      // Cancel the Axios requests when component unmounts
      source.cancel();
    };
  }, []);

  return {
    netflixOriginals,
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  };
};

export default useMovieData;
