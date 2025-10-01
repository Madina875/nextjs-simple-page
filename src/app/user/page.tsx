import Image from "next/image";
import React from "react";

const User = async () => {
  const response = await fetch("https://fakestoreapi.com/users");
  const data = await response.json();

  return (
    <div className="bg-gray-100 min-h-screen">
      <h2 className="m-auto border text-center size-full italic my-2 font-[Tangerine]">
        Choose a user and you can see info about them
      </h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-16">
        {data?.map((e: any, inx: number) => (
          <div
            key={inx}
            className="group rounded-r-2xl border-l-1 bg-white p-6 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 flex flex-col items-center text-center"
          >
            <strong className="uppercase text-lg font-semibold text-gray-800">
              {e.username}
            </strong>
            <p className="text-sm text-gray-500 mt-1">{e.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
