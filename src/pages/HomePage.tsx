import { useRecoilValue } from "recoil";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Row from "../components/Row";
import useMoviesData from "../hooks/UseMoviesData";
import useAuth from "../hooks/useAuth";
import { modalState } from "../atoms/modalAtom";
import Modal from "../components/Modal";
import Plans from "../components/Plans";
import { useEffect, useState } from "react";
import { Product } from "@stripe/firestore-stripe-payments";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const {
    trending,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  } = useMoviesData();

  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);
  const subscription = false;
  //const movie = useRecoilValue(movieState);

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const q = query(collection(db, "products"), where("active", "==", true));
    onSnapshot(q, (snapshot) => {
      const productDocs = snapshot.docs.map((doc) => doc.data()) as Product[];
      setProducts(productDocs);
    });
  }, []);

  if (loading || subscription === null) return null;

  if (!subscription) return <Plans products={products} />;

  return (
    <div
      className={`relative h-screen bg-gradient-to-b lg:h-[140vh] ${
        showModal && "!h-screen overflow-hidden"
      }`}
    >
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner />
        <section className="md:space-y-20">
          <Row title="Trending Now" movies={trending} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default Home;
