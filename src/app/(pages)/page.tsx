import  Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col-reverse items-center md:flex-row justify-center min-h-[80vh]">
      <section className="md:w-[60%] lg:w-[50%]">
        <h1 className="text-light-primary dark:text-dark-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-3 mt-4 md:mt-0 text-center md:text-left">
          Rick and Morty wiki
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Wubba Lubba Dub Dub! This ain’t your regular ol’ wiki, Morty! It’s{" "}
          <span className="text-light-primary dark:text-dark-primary font-bold">THE </span> wiki, the one
          with all the juicy deets from across the infinite dimensions! I mean,
          come on Morty, we’re talkin’ infinite timelines here, so buckle up!
          You want knowledge? This thing’s got more information than your puny
          little brain can handle, Morty. You ready for that kinda
          responsibility? Eh, who cares, you’re gettin’ it anyway. Just don’t
          turn into a Cronenberg while you’re readin' it, alright?!
        </p>
      </section>
      <section className="flex lg:w-[50%] justify-center bg-[url('/next_rick-n-morty/images/portal.png')] bg-center bg-contain bg-no-repeat">
        <Image
          src="/next_rick-n-morty/images/home-background.png"
          alt="Rick and Morty picture"
          className="object-contain max-w-90 w-[100%]"
          height={200}
          width={200}
        />
      </section>
    </main>
  );
}