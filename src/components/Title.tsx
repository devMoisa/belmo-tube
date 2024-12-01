import { Nunito } from "next/font/google";

type TitleProps = {
  label: string;
  className?: string;
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export const Title = ({ label, className }: TitleProps) => {
  return (
    <h1
      className={`text-black text-5xl font-bold ${className} ${nunito.className}`}
    >
      {label}
    </h1>
  );
};
