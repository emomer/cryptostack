import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Advanced from "./components/Advanced";
import Table from "./components/Table";
import Slider from "./components/Slider";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Advanced />
      <Table />
      <Slider />
      <Faq />
      <Footer />
    </>
  );
}
