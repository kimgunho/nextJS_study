import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <h1>
          <Link href={"/"}>
            <a>Home</a>
          </Link>
        </h1>
        <ul className="gnb">
          <li>
            <Link href={"/brand"}>
              <a>Brand</a>
            </Link>
          </li>
          <li>
            <Link href={"https://nextjs.org"}>
              <a target={"_blank"}>NextJS</a>
            </Link>
          </li>
        </ul>
      </header>

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #05d99d;
          padding: 1rem;
        }
        .gnb {
          display: flex;
          justify-content: center;
          align-items: flex-end;
        }
        .gnb li a {
          font-size: 1.125rem;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
