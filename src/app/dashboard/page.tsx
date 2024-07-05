"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Dashoboardpage = () => {
  const pathName = usePathname();
  console.log("🚀 ~ Dashoboardpage ~ pathName:", pathName);
  return <div>Dashboard page</div>;
};

export default Dashoboardpage;
