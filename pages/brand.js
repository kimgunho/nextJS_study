import Seo from "../components/Seo";

export default function Brand() {
  return (
    <>
      <div className="wrapper">
        <Seo title={"brand"} />
        <p>
          Sint enim exercitation aute consequat ea ad aute sit esse duis eu
          culpa.
        </p>
      </div>

      <style jsx>{`
        .wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 50vh;
        }
        p {
          text-align: center;
          font-size: 1rem;
          line-height: 2;
          font-size: 1.125rem;
          font-weight: lighter;
        }
      `}</style>
    </>
  );
}
