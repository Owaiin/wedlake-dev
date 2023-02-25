import H3 from "./H3";
import P from "./P";
import Button from "./Button";

export default function ProjectCard(props: {
  title: string;
  snippet: string;
  caseStudyLink?: any;
  liveLink?: string;
  bgColor: string;
  borderColor: string;
}) {
  return (
    <>
      <div
        className={`w-full my-10 rounded-lg p-10 relative border ${props.bgColor} ${props.borderColor}`}
      >
        <div className="lg:w-1/2 h-full">
          <H3 text={props.title} />
          <P text={props.snippet} />
          <div>
            <a target="_blank" href={props.liveLink}></a>
            <Button text="Live Project" />

            {props.caseStudyLink && (
              <Button
                text="View case study"
                altButton={true}
                customProps="lg:ml-2"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
