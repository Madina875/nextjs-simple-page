import Image from "next/image";
import React from "react";

const Product = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return (
    <div className=" bg-gray-300 ">
      <div className="container grid grid-cols-4 gap-10 py-20">
        {data?.map((e: any, inx: any) => (
          <div className=" h-100 flex flex-col justify-between " key={inx}>
            <div className="grid place-items-center p-5 cursor-pointer">
              <Image
                src={e.image}
                width={150}
                className="object-center object-cover"
                height={150}
                alt={"smth"}
              />
            </div>
            <div className="min-h-25 border rounded-2xl p-5">
              <strong className="italic text-[20px]">{e.price}$</strong>
              <p className="line-clamp-2">{e.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
