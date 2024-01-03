import Footer from "./footer";
import Navbar from "./navbar";
import SocialLinks from "./socialSideBar";
const Layout = ({ children }) => (
  <>
    <Navbar />
    <SocialLinks />
    {children}
    <Footer />
  </>
);

export default Layout;
