import {Outlet, ScrollRestoration} from "react-router-dom";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";

const RootLayout = () => {
  return (
    <>
      <ScrollRestoration/>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  );
};

export default RootLayout;
