"use client";
import Carousel from "antd/es/carousel";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "200px",
  color: "black",
  lineHeight: "200px",
  textAlign: "center",
  background: "#f3e8ff",
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
