/* eslint-disable @typescript-eslint/no-explicit-any */
import { Nunito } from "next/font/google";
import Typewriter from "typewriter-effect";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

type TextTypewriterProps = {
  staticText: string;
  dynamicText: any[];
};

export const TextTypewriter = ({
  staticText,
  dynamicText,
}: TextTypewriterProps) => {
  return (
    <div
      className={`text-blue-500 text-5xl font-bold flex gap-5 items-center ${nunito.className}`}
    >
      <div>{staticText}</div>
      <Typewriter
        options={{
          strings: dynamicText,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};
