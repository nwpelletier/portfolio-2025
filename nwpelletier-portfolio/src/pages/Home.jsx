import React from "react";
import { Carousel } from ".././components/Carousel";
import { slides } from ".././data/carouselData.json/";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Carousel data={slides} />
    </div>
  );
};
export default Home;
