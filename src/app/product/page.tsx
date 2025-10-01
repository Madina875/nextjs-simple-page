import Image from "next/image";
import React from "react";

const Product = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-20">
        {data?.map((e: any, inx: number) => (
          <div
            className="flex flex-col items-center p-2 bg-white rounded-2xl"
            key={inx}
          >
            <div className="group relative w-[280px] h-[280px] overflow-hidden rounded-t-2xl shadow-sm cursor-pointer">
              <Image
                src={e.image}
                alt={e.title}
                fill
                sizes="280px"
                className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            <div className="h-[100] mt-4 w-full rounded-b-2xl bg-white p-3 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-start">
                <strong className="italic text-[20px] text-gray-800">
                  {e.price}$
                </strong>
              </div>
              <p className="line-clamp-2 mt-2 text-sm text-gray-600 leading-snug">
                {e.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
