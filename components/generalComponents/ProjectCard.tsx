import H3 from "./H3";
import P from "./P";
import Button from "./Button";
import Image from "next/image";
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

export default function ProjectCard(props: {
  title: string;
  snippet: string;
  gitHubLink?: string;
  liveLink?: string;
  bgColor: string;
  borderColor: string;
  imageAlt?: string;
  imageSrc: any;
  imageStyle?: string;
  html?: boolean;
  css?: boolean;
  javascript?: boolean;
  react?: boolean;
  nextjs?: boolean;
  typescript?: boolean;
  tailwind?: boolean;
  firebase?: boolean;
}) {
  return (
    <>
      <div
        className={`w-full my-10 rounded-lg p-10 relative border overflow-hidden ${props.bgColor} ${props.borderColor}`}
      >
        <div className="lg:w-1/2 h-full">
          <H3 text={props.title} />
          <div className="grid grid-cols-12 gap-8 text-lg text-neutral-800 my-3">
            {props.html && <RiHtml5Fill />}
            {props.css && <RiCss3Fill />}
            {props.javascript && <SiJavascript />}
            {props.typescript && <SiTypescript />}
            {props.react && <RiReactjsFill />}
            {props.nextjs && <SiNextdotjs />}

            {props.tailwind && <SiTailwindcss />}
            {props.firebase && <SiFirebase />}
          </div>
          <P text={props.snippet} />
          <div>
            <a target="_blank" href={props.liveLink}>
              <Button text="Live Project" />
            </a>
            <a target="_blank" href={props.liveLink}>
              <Button text="GitHub" altButton={true} customProps="md:ml-2" />
            </a>
          </div>
        </div>
        <Image
          src={props.imageSrc}
          width={500}
          height={500}
          alt={`${props.imageAlt}`}
          className={` ${props.imageStyle}`}
        />
      </div>
    </>
  );
}
