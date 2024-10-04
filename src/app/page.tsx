import Image from "next/image";

export const TECHSTACK = [
  "NextJS",
  "Redux Toolkit",
  "TailwindCSS",
  "MaterialUI",
];

export default function Home() {
  return (
    <main className="flex flex-col-reverse items-center md:flex-row justify-center h-[80vh]">
      <section className="flex-1">
        <h1 className="text-[#9DCE34] font-bold text-3xl md:text-4xl lg:text-5xl mb-3 mt-4 md:mt-0 text-center md:text-left">
          Rick and Morty wiki
        </h1>
        <p className="text-lg mb-6">
          Wubba Lubba Dub Dub! This ain’t your regular ol’ wiki, Morty! It’s{" "}
          <span className="text-[#9DCE34] font-bold">THE </span> wiki, the one
          with all the juicy deets from across the infinite dimensions! I mean,
          come on Morty, we’re talkin’ infinite timelines here, so buckle up!
          You want knowledge? This thing’s got more information than your puny
          little brain can handle, Morty. You ready for that kinda
          responsibility? Eh, who cares, you’re gettin’ it anyway. Just don’t
          turn into a Cronenberg while you’re readin' it, alright?!
        </p>
        <ul className="flex gap-2 items-center">
          {TECHSTACK.map((tech, index) => (
            <>
              <li
                key={index}
                className="flex items-center gap-2 bg-[#003A6F] p-1 rounded-md text-sm"
              >
                {tech}
              </li>
              {index < TECHSTACK.length - 1 && <div>/</div>}
            </>
          ))}
        </ul>
      </section>
      <section className="flex flex-1 justify-center bg-[url('/img/portal.png')] bg-center bg-contain bg-no-repeat">
        <Image
          src="/img/home-background.png"
          alt="Rick and Morty picture"
          height={200}
          width={500}
        />
      </section>
    </main>
  );
}
