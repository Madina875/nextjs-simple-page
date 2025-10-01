"use client";
import Carousel from "antd/es/carousel";
import React from "react";

const contentStyle: React.CSSProperties = {
  height: "300px",
  color: "black",
  lineHeight: "300px",
  textAlign: "center",
  background: "#f3e8ff",
};

const Home = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Carousel className="font-[Tangerine] text-2xl" autoplay>
          <div>
            <h3 style={contentStyle}>Home</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Users</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Login page</h3>
          </div>
          <div>
            <h3 style={contentStyle}>Products</h3>
          </div>
        </Carousel>
      </div>

      <div className="container pt-5 font-[Volkhov]">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          quia pariatur harum necessitatibus error, facilis, itaque tempora
          facere, corporis aspernatur consequuntur reprehenderit voluptatem
          vitae voluptas nobis corrupti praesentium accusantium dignissimos
          eaque consectetur quae. Iste, tempore iure necessitatibus alias sed
          amet pariatur quam architecto facilis voluptas accusantium corporis
          laborum ullam a repellendus perferendis ex. Quisquam perferendis,
          aperiam quibusdam consequatur laborum repellendus at non? Repellat,
          aut iure eius ad similique voluptatibus sint!
        </p>
      </div>
    </div>
  );
};

export default Home;
