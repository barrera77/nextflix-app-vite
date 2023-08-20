import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Header></Header>

      <main>
        <Banner></Banner>
        <section></section>
      </main>
    </div>
  );
};

export default Home;
