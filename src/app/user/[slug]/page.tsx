"use client";
import React, { use } from "react";
import { FaEnvelope, FaPhone, FaUser, FaMapMarkerAlt } from "react-icons/fa";

const UserDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    fetch(`https://fakestoreapi.com/users/${slug}`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [slug]);

  if (!data)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg animate-pulse">
          Loading user details...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 pb-6 mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 uppercase italic">
            {data.name.firstname} {data.name.lastname}
          </h1>
          <span className="text-gray-500 font-medium">ID: {data.id}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Contact Information
            </h2>
            <p className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition">
              <FaEnvelope className="text-blue-500" /> {data.email}
            </p>
            <p className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition">
              <FaPhone className="text-green-500" /> {data.phone}
            </p>
            <p className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition">
              <FaUser className="text-purple-500" /> Username: {data.username}
            </p>
            <p className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition">
              <FaUser className="text-red-400" /> Password: {data.password}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Address
            </h2>
            <p className="flex items-center gap-3 text-gray-600 hover:text-gray-800 transition">
              <FaMapMarkerAlt className="text-red-500" /> {data.address.street},{" "}
              {data.address.number}
            </p>
            <p className="text-gray-600 hover:text-gray-800 transition">
              City: {data.address.city}
            </p>
            <p className="text-gray-600 hover:text-gray-800 transition">
              Zipcode: {data.address.zipcode}
            </p>
            <p className="text-gray-600 hover:text-gray-800 transition">
              Geolocation: Lat {data.address.geolocation.lat}, Long{" "}
              {data.address.geolocation.long}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;

/*
from-gray-100 : This is the starting color of the gradient.
via-gray-50 : This is the middle color of the gradient.
to-gray-100 : This is the ending color of the gradient.
space-y-4 adds vertical spacing (margin) between direct children of a container. | It automatically calculates margin-top for every child except the first one.
transition : color change smoothly animates over a short time
*/
