export default function H1(props: { text: string }) {
  return (
    <>
      <h1 className=" font-display text-neutral-600 font-bold text-4xl mb-2 bg-gradient-to-tl from-blue-500 to-emerald-500 bg-clip-text text-transparent">
        {props.text}
      </h1>
    </>
  );
}
