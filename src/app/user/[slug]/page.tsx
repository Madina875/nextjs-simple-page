"use client";
import React, { use } from "react";

const UserDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  return <div>UserDetail</div>;
};

export default UserDetail;
