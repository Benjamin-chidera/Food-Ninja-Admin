"use client";

import React, { useState, useEffect } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { NavLink, useLocation } from "react-router";
import Cookies from "js-cookie";

export const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isLoggedIn = Cookies.get("isLoggedIn");

  const handleClose = () => {
    setOpen(false);
  };

  // Effect to handle scrolling behavior
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }

    // Cleanup function to reset on unmount or when isOpen changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <main>
      {!(pathname.includes("/delivery") || pathname.includes("/admin")) && (
        <section>
          <nav className="bg-[#4CAF50] text-[#FFFFFF] h-20 flex justify-center items-center px-4">
            <div className="container md:mx-auto flex justify-between items-center">
              <NavLink to={"/"} className="font-bold text-2xl">
                Food Ninja
              </NavLink>

              <div className="gap-10 hidden md:flex">
                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/help-center"}>Help Center</NavLink>
                {!isLoggedIn ? (
                  <NavLink to={"/login"}>Login</NavLink>
                ) : (
                  <NavLink to={"/delivery/dashboard/home"}>Dashboard</NavLink>
                )}
              </div>
            </div>

            <div className="md:hidden z-20">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </nav>

          {/* mobile navbar */}
          {isOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-[#4CAF50] z-10">
              <div className="flex flex-col gap-10 items-center justify-center h-full text-lg text-white font-semibold">
                <NavLink onClick={handleClose} to={"/"}>
                  Home
                </NavLink>
                <NavLink onClick={handleClose} to={"/help-center"}>
                  Help Center
                </NavLink>
                {!isLoggedIn ? (
                  <NavLink onClick={handleClose} to={"/login"}>
                    Login
                  </NavLink>
                ) : (
                  <NavLink to={"/delivery/dashboard/home"}>Dashboard</NavLink>
                )}
              </div>
            </div>
          )}
        </section>
      )}
    </main>
  );
};
