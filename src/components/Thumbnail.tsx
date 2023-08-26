import { useRecoilState } from "recoil";
import { Movie } from "../typings";
import { modalState, movieState } from "../atoms/modalAtom";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  const [, setShowModal] = useRecoilState(modalState);
  const [, setCurrentMovie] = useRecoilState(movieState);

  return (
    <div
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
      className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export default Thumbnail;
