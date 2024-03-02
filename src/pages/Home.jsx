import React from "react";
import HeroSection from "../component/hero";
import Brand from "../component/brand";
import Brand2 from "../component/brand2";
import Service from "../component/service";
import Product from "../component/product";
import Features from "../component/features";
import Contact from "../component/contact";
import BigProduct from "../component/bigProductShow";
import Video from "../component/video";


export default function Home() {
  return (
    <>
      <HeroSection />
      <Brand />
      <Service />
      <Product />
      <Features />
      <Contact />
      <Video />
      <BigProduct />
      <Brand2 />
    </>
  );
}
