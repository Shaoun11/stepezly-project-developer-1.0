import Image from "next/image";
import Navbar from "./Components/Navbar";

import Sales from "./Components/Sales";
import About from "./Components/About";
import Discover from "./Components/Discover";
import Feature from "./Components/Feature";
import Advertise from "./Components/Advertise";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero></Hero>
    <Sales></Sales>
    <About></About>
    <Discover></Discover>
    <Feature></Feature>

    <Card></Card>
    <Footer></Footer>
    </div>
  );
}
