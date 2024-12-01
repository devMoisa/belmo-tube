"use client";

import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title";
import "@/styles/home.css";

export default function Home() {
  return (
    <div
      className="h-full w-full flex items-center customBg flex-col"
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Title
        label="Baixe seus videos de forma gratuita 🚀"
        className="mt-10 bg-white p-5 rounded-lg"
      />
    </div>
  );
}
