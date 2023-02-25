import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
export default function HeroPara() {
  return (
    <>
      <p className=" text-neutral-500 font-brand leading-8">
        <RoughNotationGroup show={true}>
          Hey I'm Owain, a budding developer that loves the{" "}
          <RoughNotation type="highlight" padding={1} color="#fef9c3" order={1}>
            Frontend,
          </RoughNotation>{" "}
          especially working in ReactJS and{" "}
          <RoughNotation type="highlight" padding={2} color="#fae8ff" order={2}>
            NextJS ❤️
          </RoughNotation>{" "}
          I've always been a{" "}
          <RoughNotation type="highlight" padding={1} color="#a7f3d0" order={3}>
            problem solver
          </RoughNotation>{" "}
          so I've spent most of my time finding little workarounds for real life
          issues... Like finding which streaming platform the obscure film my
          girlfriend wants to watch is on!🍿
          <br />
          <RoughNotation padding={10} type="circle" color="#3b82f6">
            Fancy a chat?
          </RoughNotation>
        </RoughNotationGroup>
      </p>
    </>
  );
}
