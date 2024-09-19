import AutoCarousel from "@/components/Carousel";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  const images = [
    "/slide_1.jpg",
    "/slide_2.jpg",
    "/slide_3.jpg",
    "/slide_4.jpg",
  ];

  return (
    <>
      <Header />
      <AutoCarousel images={images} />
      <Contact />
    </>
  );
}
