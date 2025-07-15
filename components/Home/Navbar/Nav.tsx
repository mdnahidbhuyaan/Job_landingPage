"use client";
import ThemeTogglar from "@/components/Helper/ThemeTogglar";
import { Navlinks } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { LuNetwork } from "react-icons/lu";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handlar = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handlar);
    return () => window.removeEventListener("scroll", handlar);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-white dark:bg-gray-900 shadow-md " : "fixed"
      } duration-200 h-[9vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[92%] mx-auto">
        <div className="flex items-center sm:space-x-20 ">
          {/* logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-cyan-800 dark:bg-white rounded-full flex items-center justify-center flex-col ">
              <LuNetwork className="w-5 h-5 text-white dark:text-black" />
            </div>
            <h1 className="text-xl hidden sm:block md:text-2xl text-cyan-700 dark:text-white font-bold">
              DevHire
            </h1>
          </div>

          {/* NAVLINKE */}
          <div className="hidden lg:flex items-center space-x-10">
            {Navlinks.map((link) => {
              return (
                <Link
                  key={link.id}
                  href={link.url}
                  className="text-base hover:text-cyan-700 dark:hover:text-cyan-200 font-medium transition-all duration-200"
                >
                  <p>{link.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4 ">
          <button className="px-8 py-2.5 text-xs sm:text-sm rounded-lg cursor-pointer bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900 hover:text-rose-400 transition-all duration-300     ">
            Login / Register
          </button>
          <button className="py-2.5 px-8 text-sm hidden sm:block cursor-pointer rounded-lg bg-cyan-500 hover:bg-cyan-950 text-white transition-all duration-300">
            Job Post
          </button>
          {/* Theme toggler */}
          <ThemeTogglar />
          {/* Burger menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-black lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
