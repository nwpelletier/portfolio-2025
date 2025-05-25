import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="page-container">
      <Intro />
    </div>
  );
};

export default Home;

const Intro = () => {
  return (
    <div className="intro">
      <h2>Hi!</h2>
      <p>
        I'm Nick, a web developer focused on React and modern UI. I come from a
        background in music and sound recording, which shaped the way I approach
        problem-solving—carefully, creatively, and with attention to detail.
      </p>
    </div>
  );
};
