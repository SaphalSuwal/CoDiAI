import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useClerk, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { signOut } = useClerk();
  const { user } = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Learning", path: "/learning" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/home"
          className="text-2xl font-bold tracking-tighter 
                     bg-gradient-to-r from-white via-pink-500 to-purple-800 
                     bg-clip-text text-transparent hover:opacity-90 hover:brightness-125 
                     drop-shadow-lg transition-all duration-300"
        >
          CoDi AI
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-white font-medium text-sm 
                         after:content-[''] after:absolute after:-bottom-1 after:left-1/2 
                         after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-pink-500 after:to-purple-800
                         after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* User Info */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-white/70 text-[10px] uppercase tracking-widest">Logged in as</span>
            <span className="text-white font-semibold text-sm">{user?.firstName || "User"}</span>
          </div>
          <button
            onClick={() => signOut(() => (window.location.href = "/"))}
            className="bg-white/90 text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300"
          >
            SIGN OUT
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white font-medium text-sm hover:underline hover:underline-offset-4 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => signOut(() => (window.location.href = "/"))}
            className="bg-white/90 text-black text-xs font-bold px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 mt-2"
          >
            SIGN OUT
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
