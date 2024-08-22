"use client";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Headers() {
    const [open, setOpen] = useState(false);
  
    const toggle = () => {
      setOpen(!open);
      // console.log(open)
    };



useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [open]);


function Headers() {
  return (
    <>
        <div
        className={`sticky top-0 z-50 drop-shadow-xl transition-colors bg-transparent duration-500 p-4 px-10 bg-[rgba(255, 255, 255, 0.01)] backdrop-blur-[10px] flex justify-between items-center text-white shadow-bottom-only`}
      >
        <div className="text-3xl">NEXMEET</div>
        <div className="hidden bg-none md:flex md:gap-10">
          <Link href="/">Home</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Create Event</Link>
          <LoginLink>Sign in</LoginLink>
          <RegisterLink>Sign up</RegisterLink>
        </div>
        <div className="block md:hidden" onClick={() => toggle()}>
          {open ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
      </div>
      <div
        className={`${
          open
            ? `h-screen flex flex-col justify-center items-center gap-10`
            : `hidden`
        } md:hidden`}
      >
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Create Event</Link>
        <Link href="/">SignIn</Link>
        <Link href="/">Login</Link>
      </div>

    </>
  )
}
}
export default Headers