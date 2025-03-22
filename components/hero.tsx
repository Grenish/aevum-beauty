import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center w-full h-screen ">
        <p className="w-1/2 text-center text-balance text-sm">
          Eternal Elegance, Timeless Allure.
        </p>
        <h2 className="text-6xl blackMango font-extrabold">Aevum Beauty</h2>
        <p className="w-1/2 text-center text-balance mt-2 text-sm">
          Where elegance meets eternity, crafting moments of timeless allure and
          modern grace.
        </p>
      </div>
      <div className="w-full h-screen p-2">
        <Image
          src="/hero.jpg"
          alt="Aevum Beauty"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
}
