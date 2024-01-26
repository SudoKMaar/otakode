import Image from "next/image";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">
        &copy; {currentYear}
        <Link
          href="https://kmaar.vercel.app/"
          target="_blank"
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          {" "}
          Abhishek Kumar
        </Link>
      </p>
      <Link href="#hero">
        <Image
          src="/logo.png"
          alt="Otakode"
          width={135}
          height={34}
          className="object-contain"
        />
      </Link>
      <div className="flex items-center gap-6">
        <Link href="https://www.linkedin.com/in/abhishekkmaar/" target="_blank">
          <Image
            src="/linkedin.svg"
            alt="LinkedIn"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href="https://www.instagram.com/KMaar44" target="_blank">
          <Image
            src="/instagram.svg"
            alt="Instagram"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
        <Link href="https://github.com/SudoKMaar" target="_blank">
          <Image
            src="/github.svg"
            alt="GitHub"
            width={19}
            height={19}
            className="object-contain"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
