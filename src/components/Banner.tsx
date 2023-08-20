import { useEffect, useState } from "react";
import { Movie } from "../typings";
import axios from "axios";
import { baseUrl } from "../constants/movie";
import requests from "../utils/requests";

function Banner() {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    async function getNetflixOriginals() {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals, {
          cancelToken: source.token,
        });
        const netflixOriginals = response.data.results;

        setMovie(
          netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
        );
      } catch (error) {
        if (axios.isCancel(error)) {
          // Request was canceled
        } else {
          // Handle other errors
          console.log(error);
        }
      }
    }
    getNetflixOriginals();

    return () => {
      // Cancel the Axios request when component unmounts
      source.cancel();
    };
  }, []);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} />
      </div>
    </div>
  );
}

export default Banner;
