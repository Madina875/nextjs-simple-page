"use client";
import Image from "next/image";
import React, { use } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [id]);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading products details...
        </p>
      </div>
    );
  console.log(data);

  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
            <Image
              src={data.image}
              alt={data.title}
              width={400}
              height={400}
              className="object-contain rounded-xl"
            />
          </div>

          <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{data.title}</h1>
              <p className="text-sm text-gray-500 uppercase mt-1">
                {data.category}
              </p>

              <div className="flex items-center mt-2 gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < Math.round(data.rating.rate)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-600 text-sm">
                  ({data.rating.count} reviews)
                </span>
              </div>

              <p className="text-gray-700 mt-4">{data.description}</p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-800">
                ${data.price}
              </span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
