import SocialLinks from "./SocialSideBar";
import Footer from "./footer";
import Navbar from "./navbar";
const Layout = ({ children }) => (
  <>
    <Navbar />
    <SocialLinks />
    {children}
    <Footer />
  </>
);

export default Layout;
