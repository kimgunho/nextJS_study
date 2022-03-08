import Seo from "../../components/Seo";

export default function Detail({ data }) {
  console.log(data);
  return (
    <>
      <Seo title={data.original_title} />
      <div
        className="wrapper"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`,
        }}
      >
        <div className="image">
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.original_title}
          />
        </div>
        <div className="info">
          <h2>{data.original_title}</h2>
          <p>{data.overview || ""}</p>
        </div>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          justify-content: center;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .wrapper div {
          width: 50%;
          padding: 2rem;
          box-sizing: border-box;
        }
        .wrapper img {
          width: 100%;
        }
        .wrapper .info {
          background-color: rgba(255, 255, 255, 0.5);
        }
        .wrapper .info h2 {
          padding-bottom: 1rem;
        }
      `}</style>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const id = context.params.params[0];

  const data = await (
    await fetch(`http://localhost:3000/api/movies/${id}`)
  ).json();
  return {
    props: {
      data,
    },
  };
};
