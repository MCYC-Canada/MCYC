"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  let subpage = pathname.split("/")[1];

  function Linkness(type = "") {
    let classes = "";
    if (type === subpage) {
      classes += "underline decoration-solid font-bold text-line-brown";
    } else {
      classes += "hover:underline cursor-pointer";
    }
    return classes;
  }

  return (
    <div className="p-4 items-center">
      <div className="flex container mx-auto justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-1/6 ml-4 lg:ml-12">
          <img src="/Logo/logo.png" alt="Logo" className="w-24 lg:w-32" />
        </Link>

        {/* Hamburger Icon for mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-10 text-xl absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent lg:p-0 p-4 z-10`}
        >
          <li className="text-center py-2 lg:py-0">
            <Link href="/">
              <span className={Linkness("")}>Home</span>
            </Link>
          </li>
          <li className="text-center py-2 lg:py-0">
            <Link href="/team">
              <span className={Linkness("team")}>Our Team</span>
            </Link>
          </li>
          <li className="text-center py-2 lg:py-0">
            <Link href="/past_events">
              <span className={Linkness("past_events")}>Past Events</span>
            </Link>
          </li>
          <li className="text-center py-2 lg:py-0">
            <Link href="/sponsors">
              <span className={Linkness("sponsors")}>Sponsors</span>
            </Link>
          </li>
        </ul>

        {/* Social Icons for Desktop */}
        <div className="hidden lg:flex space-x-4">
          <Link target="_blank" href="https://www.instagram.com/mcyc.22/">
            <img src="/Logo/instagram.webp" className="w-8 lg:w-12" alt="Instagram" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/movement-for-change-youth-council"
          >
            <img src="/Logo/linkedin.png" className="w-8 lg:w-12" alt="LinkedIn" />
          </Link>
        </div>
      </div>

      {/* Mobile Social Icons */}
      {isMenuOpen && (
        <div className="flex justify-center mt-24 mb-4 lg:hidden space-x-4">
          <Link target="_blank" href="https://www.instagram.com/mcyc.22/">
            <img src="/Logo/instagram.webp" className="w-8" alt="Instagram" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/movement-for-change-youth-council"
          >
            <img src="/Logo/linkedin.png" className="w-8" alt="LinkedIn" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
