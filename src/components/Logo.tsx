import Image from "next/image";

export const Logo = () => {
  return (
    <div className="flex items-center gap-5 hover:cursor-pointer hover:opacity-50 hover:transition">
      <Image src={"/play.png"} height={50} width={50} alt="Play Icon" />
      <h1 className="text-black text-3xl font-semibold">BelmoTube</h1>
    </div>
  );
};
