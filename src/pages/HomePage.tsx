import axios from "axios";
import { useState, useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import requests from "../utils/requests";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [documentaries, setDocumentaries] = useState([]);

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
        ]);

        setTrending(responseArray[0].data.results);
        setTopRated(responseArray[1].data.results);
        setActionMovies(responseArray[2].data.results);
        setComedyMovies(responseArray[3].data.results);
        setHorrorMovies(responseArray[4].data.results);
        setRomanceMovies(responseArray[5].data.results);
        setDocumentaries(responseArray[6].data.results);
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

  return (
    <div className={"relative h-screen bg-gradient-to-b lg:h-[140vh]"}>
      <Header></Header>

      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner></Banner>
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trending} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
    </div>
  );
};

export default Home;
