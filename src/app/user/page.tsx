import Image from "next/image";
import React from "react";

const User = async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  const data = await response.json();

  return (
    <div className=" bg-gray-300 min-h-screen">
      <div className="container grid grid-cols-4 gap-10 py-20">
        {data?.map((e: any, inx: any) => (
          <div className=" flex flex-col justify-between " key={inx}>
            <strong className="italic text-[20px]">{e.username}</strong>
            <p className="line-clamp-2">{e.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
