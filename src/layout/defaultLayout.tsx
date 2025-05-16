// layout/DefaultLayout.tsx
import NavBar from "./navBar";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop";

const DefaultLayout = () => {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
