import Head from "next/head";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
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
import HeroPara from "@/components/generalComponents/HeroPara";
import FindFlixImage from "@/public/images/FindFlixImg.png";
import InstructionalImage from "@/public/images/laptopFrame.png";

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
        <header className="mb-10">
          <Container>
            <div className="grid lg:grid-cols-2 gap-5 h-full pt-32 lg:pt-40">
              <div className="h-full flex flex-col justify-center">
                <H1 text="Frontend Development with a passion for web." />
                <HeroPara />

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
              <div className="grid grid-cols-3 gap-10 text-sm font-brand  text-neutral-700 mt-10  ">
                <div className="flex flex-col items-center">
                  <RiHtml5Fill className="text-6xl mb-3 hover:text-htmlRed hover:scale-110 transition-all duration-150 ease-out" />
                  <p>HTML</p>
                </div>
                <div className="flex flex-col items-center">
                  <RiCss3Fill className="text-6xl mb-3 hover:text-cssBlue hover:scale-110 transition-all duration-150 ease-out" />
                  <p>CSS</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiJavascript className="text-6xl mb-3 hover:text-jsYellow hover:bg-black hover:scale-110 transition-all duration-150 linear" />
                  <p>JavaScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="text-6xl mb-3 hover:text-tsBlue hover:scale-110 transition-all duration-150 ease-out" />
                  <p>TypeScript</p>
                </div>
                <div className="flex flex-col items-center">
                  <RiReactjsFill className="text-6xl mb-3 hover:text-reactBlue hover:scale-110 transition-all duration-150 ease-out" />
                  <p>React</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-6xl mb-3 hover:text-black hover:scale-110 transition-all duration-150 ease-out" />
                  <p>NextJS</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiTailwindcss className="text-6xl mb-3 hover:text-cyan-500 hover:scale-110 transition-all duration-150 ease-out" />
                  <p>Tailwind</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiFirebase className="text-6xl mb-3 hover:text-firebaseYellow hover:scale-110 transition-all duration-150 ease-out" />
                  <p>Firebase</p>
                </div>
                <div className="flex flex-col items-center">
                  <SiNetlify className="text-6xl mb-3 hover:text-netlifyGreen hover:scale-110 transition-all duration-150 ease-out" />
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
                imageSrc={FindFlixImage}
                imageStyle="absolute hidden lg:block lg:w-1/4 lg:top-10 lg:right-24 2xl:right-40 2xl:top-5 2xl:w-2/12"
              />
              <ProjectCard
                title="Nice and Easy 🧑‍🏫"
                snippet="Instructional is a platform for creating clear, consice, & clean, guides and tutorials"
                bgColor="bg-blue-50"
                borderColor="border-blue-500"
                liveLink="https://instructional.netlify.app"
                imageSrc={InstructionalImage}
                imageStyle="absolute hidden lg:block lg:-right-32 lg:top-14 2xl:right-0 2xl:top-20"
              />
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
