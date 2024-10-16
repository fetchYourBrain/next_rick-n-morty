import  Image from "next/image";
import { MainButton } from "./components/MainButton";

export default function Home() {
  return (
    <main className="flex flex-col-reverse items-center md:flex-row justify-center h-[80vh]">
      <section className="flex-1">
        <h1 className="text-ligth-primary dark:text-dark-primary font-bold text-3xl md:text-4xl lg:text-5xl mb-3 mt-4 md:mt-0 text-center md:text-left">
          Rick and Morty wiki
        </h1>
        <p className="text-lg mb-6">
          Wubba Lubba Dub Dub! This ain’t your regular ol’ wiki, Morty! It’s{" "}
          <span className="text-ligth-primary dark:text-dark-primary font-bold">THE </span> wiki, the one
          with all the juicy deets from across the infinite dimensions! I mean,
          come on Morty, we’re talkin’ infinite timelines here, so buckle up!
          You want knowledge? This thing’s got more information than your puny
          little brain can handle, Morty. You ready for that kinda
          responsibility? Eh, who cares, you’re gettin’ it anyway. Just don’t
          turn into a Cronenberg while you’re readin' it, alright?!
        </p>
        <MainButton text={'Portal to Git-hubverse'} />
      </section>
      <section className="flex flex-1 justify-center bg-[url('/next_rick-n-morty/images/portal.png')] bg-center bg-contain bg-no-repeat">
        <Image
          src="/next_rick-n-morty/images/home-background.png"
          alt="Rick and Morty picture"
          height={150}
          width={500}
        />
      </section>
    </main>
  );
}