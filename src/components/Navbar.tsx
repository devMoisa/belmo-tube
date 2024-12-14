import React, { useState } from "react";
import Button from "./Button";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const listLinks = [
    { name: "Baixar Videos", goTo: "/" },
    { name: "Sobre", goTo: "/about" },
    { name: "Contato", goTo: "/" },
  ];

  return (
    <div className="container">
      <nav className="w-full bg-white p-5 rounded-lg mt-5 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />
          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-end gap-5 mt-1">
            {listLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.goTo}
                  className="text-black font-semibold hover:text-main"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Burger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            className="text-black focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <Button className="pl-10 pr-10 pt-3 pb-3" onClick={() => {}}>
            Login
          </Button>
          <Button className="pl-10 pr-10 pt-3 pb-3" onClick={() => {}}>
            Cadastre-se
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white p-5 rounded-lg mt-3">
          <ul className="flex flex-col gap-4">
            {listLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.goTo}
                  className="text-black font-semibold hover:text-main"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-start gap-4 mt-4">
            <Button className="w-full py-3" onClick={() => {}}>
              Login
            </Button>
            <Button className="w-full py-3" onClick={() => {}}>
              Cadastre-se
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
