"use client";

import Button from "@/components/Button";
import { DevelopedBy } from "@/components/DevelopedBy";
import Input from "@/components/Input";
import { Navbar } from "@/components/Navbar";
import { Title } from "@/components/Title";
import { TextTypewriter } from "@/components/Typewriter";
import "@/styles/home.css";
import { useState } from "react";

export default function Home() {
  const [link, setLink] = useState("");
  return (
    <div
      className="h-full w-full flex items-center customBg flex-col"
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Title
        label="A maneira mais fácil de baixar vídeos online 🚀"
        className="bg-white p-5 rounded-lg mt-28"
      />
      <TextTypewriter
        staticText="Baixe videos do"
        dynamicText={[
          "TikTok",
          "Instagram",
          "Facebook",
          "YouTube",
          "Shorts",
          "Twitter",
          "Reels",
        ]}
      />
      <p className="w-[550px] text-center mt-5 text-2xl bg-white p-2 rounded-lg">
        Insira a <b>url</b> no campo abaixo e clique em &quot;Baixar&quot; para
        começar a baixar o vídeo AGORA!!!!
      </p>
      <div className="w-1/2 mt-9 flex gap-2  max-w-[700px]">
        <Input
          value={link}
          setValue={setLink}
          placeholder="Cole a url do vídeo aqui"
          className="rounded-lg p-5 w-full"
        />
        <Button
          onClick={() => {}}
          className="bg-blue-500 text-white pl-10 pr-10 rounded-lg"
        >
          Baixar
        </Button>
      </div>
      <DevelopedBy />
    </div>
  );
}
