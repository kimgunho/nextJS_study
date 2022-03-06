import { useState, useEffect } from "react";
import Seo from "../components/Seo";

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const res = await (await fetch("/api/movies")).json();
      const { results } = await res;
      setMovies(results);
    })();
  }, []);

  return (
    <>
      <div>
        <Seo title="Home" />
        {!movies && <p>loading...</p>}
        <ul className="movies">
          {movies?.map((movie) => (
            <li key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.original_title}
              />
              <h2>{movie.original_title}</h2>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .movies {
          margin-top: 2rem;
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        .movies li {
          width: 22%;
          margin-bottom: 2rem;
        }
        .movies li h2 {
          font-size: 1.25rem;
          color: #212121;
          text-align: center;
          padding: 0.5rem 0;
        }
        .movies li img {
          width: 100%;
          border-radius: 1rem;
        }
      `}</style>
    </>
  );
}
