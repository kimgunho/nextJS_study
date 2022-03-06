import Header from "./Header";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="wrapper">
        {children}

        <style jsx>{`
          .wrapper {
            padding: 1rem;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}
