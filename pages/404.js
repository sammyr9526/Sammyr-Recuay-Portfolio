import Link from "next/link";
import Layout from "../components/layout";

const custom404 = () => (
  <Layout>
    <div className="text-center mt-5">
      <h1>404</h1>
      <p>
        this page does not exist. Please return to
        <Link href="/">
          <a> Home</a>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
