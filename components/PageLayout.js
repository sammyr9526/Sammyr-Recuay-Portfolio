import Footer from "./Footer";
import Navbar from "./Navbar";
import SocialLinks from "./SocialSideBar";
const Layout = ({ children }) => (
  <>
    <Navbar />
    <SocialLinks />
    {children}
    <Footer />
  </>
);

export default Layout;
