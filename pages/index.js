import { useRouter } from "next/router";
import Seo from "../components/Seo";

export default function Home({ results }) {
  const router = useRouter();

  const onClick = (id, title) => {
    router.push(`/movies/${id}/${title}`);
  };

  return (
    <>
      <div>
        <Seo title="Home" />
        <ul className="movies">
          {results?.map((movie) => (
            <li
              key={movie.id}
              onClick={() => onClick(movie.id, movie.original_title)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
          cursor: pointer;
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

export const getServerSideProps = async () => {
  const res = await (await fetch("http://localhost:3000/api/movies")).json();
  const { results } = await res;

  return {
    props: {
      results,
    },
  };
};
