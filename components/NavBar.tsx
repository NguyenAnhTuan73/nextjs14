"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export const NavBar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/menu");
  };
  return (
    <nav>
      <div className="flex items-center justify-between p-5 bg-slate-500">
        <h1 className="w-1/3 text-start">Logo</h1>
        <ul className="flex items-center w-1/2 justify-end ">
          <Link className="mx-2" href="/menu">
            Menu
          </Link>
          <Link className="mx-2" href="/about">
            About
          </Link>
          <Link className="mx-2" href="/contact">
            Contact
          </Link>
        </ul>
      </div>
    </nav>
  );
};
