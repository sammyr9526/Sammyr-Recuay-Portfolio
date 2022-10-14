import Footer from "./footer";
import Navbar from "./navbar";
import SocialLinks from "./socialLinks";
const Layout = ({ children }) => (
  <>
    <Navbar />
    <SocialLinks />
    {children}
    <Footer />
  </>
);

export default Layout;
