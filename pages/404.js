import Link from "next/link";

const custom404 = () => (
  <div className="text-center mt-5">
    <h1>404</h1>
    <p>
      this page does not exist. Please return to
      <Link href="/">
        <a> Home</a>
      </Link>
    </p>
  </div>
);

export default custom404;
