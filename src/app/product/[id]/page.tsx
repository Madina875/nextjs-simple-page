"use client";
import React, { use } from "react";

const ProductDetail = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
