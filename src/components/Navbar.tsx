import React from "react";
import Button from "./Button";
import { Logo } from "./Logo";

export const Navbar = () => {
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
          <ul className="flex justify-end gap-5 mt-1">
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
        <div className="flex items-center gap-5">
          <Button className="pl-10 pr-10 pt-3 pb-3" onClick={() => {}}>
            Login
          </Button>
          <Button className="pl-10 pr-10 pt-3 pb-3" onClick={() => {}}>
            Cadastre-se
          </Button>
        </div>
      </nav>
    </div>
  );
};
