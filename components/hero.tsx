import Image from "next/image";

function Hero() {
  return (
    <header
      className="hero sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0"
      id="hero"
    >
      <div className="flex-1 flex flex-col gap-2">
        <Image
          src="/logo.png"
          alt="Otakode"
          width={251}
          height={66}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Find Your Next<span className="red-gradient"> Anime Obsession</span>{" "}
          For Free
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[60vh] justify-center">
        <Image
          src="/hero1.webp"
          alt="Otakode Mascot"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
}

export default Hero;
