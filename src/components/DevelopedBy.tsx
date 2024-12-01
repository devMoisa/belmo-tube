import Image from "next/image";

export const DevelopedBy = () => {
  return (
    <div className="mt-5 flex flex-col items-center fixed bottom-10">
      <div className="text-center text-black text-lg bg-white p-2 mb-5">
        This Website is developed by{" "}
        <a
          href="https://www.linkedin.com/in/devmoisa/"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 font-bold"
        >
          @devMoisa
        </a>
      </div>
      <Image
        alt="Buy me a Coffee"
        src={"/buyMeACoffee.png"}
        height={100}
        width={200}
        className="cursor-pointer hover:opacity-50 transition"
      />
    </div>
  );
};
