import Header from '@/components/Header/Header'
import Hero from "./Hero/Hero";
import Info from "./Info/Info";
import Focus from "./Focus/Focus";
import Articles from "./Articles/Articles";
import Service from "@/pages/Home/Service/Service";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Info/>
        <Focus/>
        <Articles/>
        <Service/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
