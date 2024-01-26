import Image from "next/image";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col h-screen p-6">
      <div>
        <span className="text-2xl font-bold">404 NOT FOUND</span>
      </div>
      {/* content */}
      <div className="flex flex-col items-center justify-center h-screen md:flex-row">
        {/* image */}
        <div className="flex items-center flex-1 mt-10 md:mt-0">
          <Image src="/notfound.png" alt="404 not found" fill />
        </div>
        {/* text */}
        <div className="flex-1 md:ml-8">
          <h1 className="text-6xl font-bold">I have bad news for you</h1>
          <p className="mt-6 text-2xl">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link
            className="inline-block py-4 mt-6 text-lg tracking-wider text-white gradient-bg rounded px-7"
            href="/"
          >
            BACK TO HOMEPAGE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
