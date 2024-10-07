import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute w-[400vw] h-[400vh] top-1/2 left-1/2 mt-[-200vh] ml-[-200vw] animate-spin-slow bg-space-pattern bg-[length:240px] backface-visible"></div>
      <div className="absolute flex flex-col items-center top-1/2 left-0 right-0 mx-auto transform -translate-y-1/2 w-fit text-center justify-center p-4" >
        <span className="relative text-white font-extrabold text-[10em] sm:text-[10em] md:text-[12em] lg:text-[20.4em] block overflow-hidden h-max before:content-[''] before:absolute before:h-full before:w-full before:bg-center before:bg-no-repeat before:bg-contain before:animate-rotate-in before:bg-not-found-pattern">
          4&nbsp;&nbsp;4
        </span>
        <p className="text-center text-base sm:text-sm md:text-lg lg:text-xl text-[#9DCE34]">
          Oh, no! That page? Yeah, it&apos;s not just lost, it&apos;s spiraled into a different dimension! <br /> Better grab your portal gun, Morty!
        </p>
        <Link href="/">
          <button type="button" className="bg-[#148a42] mt-2 border-0 py-2 px-4 sm:py-2.5 sm:px-5 rounded-full uppercase text-white cursor-pointer text-xs sm:text-sm">
            Get Us Outta Here!
          </button>
        </Link>
      </div>
    </div>
  );
}

