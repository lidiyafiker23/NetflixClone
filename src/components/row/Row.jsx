import { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.css";
import youTube from "react-youtube";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="text-white pl-5">
        <div>
          <h2 className="text-[25px] font-bold">{title}</h2>
          <div className="row_poster flex gap-3 overflow-x-auto p-5 overflow-y-hidden">
            {movies.map((movie) => (
              <img
                onClick={() => handleClick(movie)}
                src={`https://image.tmdb.org/t/p/original/${
                  isLarge ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt=""
                className={`${
                  isLarge
                    ? "h-[250px] hover:scale-125 transition-transform duration-300"
                    : "h-[100px] hover:scale-110 transition-transform duration-300"
                }cursor-pointer object-contain`}
              />
            ))}
          </div>
          <div style={{ padding: "40px" }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
