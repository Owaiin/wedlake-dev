import H3 from "./H3";
import P from "./P";
import Button from "./Button";
import Image from "next/image";
import { StringLiteral } from "typescript";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

export default function ProjectCard(props: {
  title: string;
  snippet: string;
  caseStudyLink?: any;
  liveLink?: string;
  bgColor: string;
  borderColor: string;
  imageAlt?: string;
  imageSrc: string;
  imageStyle?: string;
}) {
  return (
    <>
      <div
        className={`w-full my-10 rounded-lg p-10 relative border overflow-hidden ${props.bgColor} ${props.borderColor}`}
      >
        <div className="lg:w-1/2 h-full">
          <H3 text={props.title} />
          <P text={props.snippet} />
          <div>
            <a target="_blank" href={props.liveLink}>
              <Button text="Live Project" />
            </a>

            {props.caseStudyLink && (
              <Button
                text="View case study"
                altButton={true}
                customProps="lg:ml-2"
              />
            )}
          </div>
        </div>
        <Image
          src={`${props.imageSrc}`}
          width={500}
          height={500}
          alt={`${props.imageAlt}`}
          className={` ${props.imageStyle}`}
        />
      </div>
    </>
  );
}
