import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/generalComponents/Container";
import H1 from "@/components/generalComponents/H1";
import H2 from "@/components/generalComponents/H2";
import P from "@/components/generalComponents/P";
import Button from "@/components/generalComponents/Button";
import ProjectCard from "@/components/generalComponents/ProjectCard";
import Footer from "@/components/generalComponents/Footer";
import {
  RiGithubFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiReactjsFill,
} from "react-icons/ri";
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiNetlify,
} from "react-icons/si";
import Navbar from "@/components/generalComponents/NavBar";

export default function Home() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <Head>
        <title>Wedlake.Dev</title>
        <meta
          name="description"
          content="Frontend Development Portfolio - Owain Wedlake"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-stone-100 min-h-screen pb-2 scroll-smooth">
        <Navbar />
        <header className="mb-40">
          <Container>
            <div className="grid lg:grid-cols-2 gap-5 h-full pt-40">
              <div className="h-full flex flex-col justify-center">
                <H1 text="Frontend Development with a passion for web." />
                <P
                  text="Hey I'm Owain, a budding developer that loves the Frontend, especially working in ReactJS and NextJS ❤️
              I've always been a problem solver so I've spent most of my time finding little workarounds for real life issues... Like finding which streaming platform the obscure film my girlfriend wants to watch is on!🍿"
                />
                <div>
                  <Button
                    onSmash={() => openInNewTab("https://github.com/Owaiin")}
                    text={`GitHub`}
                  />
                  <Button
                    onSmash={() =>
                      openInNewTab(
                        "https://www.linkedin.com/in/owain-wedlake-115009143/"
                      )
                    }
                    altButton={true}
                    text="LinkedIn"
                    customProps="ml-2"
                  />
                </div>
              </div>
            </div>
          </Container>
        </header>
        <main className=" bg-r">
          <section className="my-20">
            <Container>
              <H2 text="Tech" />
              <div className="grid grid-cols-3 gap-10 text-sm font-brand  text-neutral-700 mt-10 ">
                <div className="flex flex-col items-center">
                  <RiHtml5Fill className="text-6xl mb-3" />
                  <p>HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <RiCss3Fill className="text-6xl mb-3" />
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiJavascript className="text-6xl mb-3" />
                  <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="text-6xl mb-3" />
                  <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <RiReactjsFill className="text-6xl mb-3" />
                  <p>React</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-6xl mb-3" />
                  <p>NextJS</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-6xl mb-3" />
                  <p>Tailwind</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiFirebase className="text-6xl mb-3" />
                  <p>Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiNetlify className="text-6xl mb-3" />
                  <p>Netlify</p>
                </div>
              </div>
            </Container>
          </section>

          <section className="my-20">
            <Container>
              <H2 text="Projects" />
              <ProjectCard
                title="Search, Select, Stream 📽️"
                snippet="Find-Flix, a project to make searching across streaming platforms easy."
                bgColor="bg-rose-50"
                borderColor="border-rose-800"
                liveLink="https://find-flix.netlify.app"
              />
              <ProjectCard
                title="Nice and Easy 🧑‍🏫"
                snippet="Instructional is a platform for creating clear, consice, & clean, guides and tutorials"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
                liveLink="https://instructional.netlify.app"
              />
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
