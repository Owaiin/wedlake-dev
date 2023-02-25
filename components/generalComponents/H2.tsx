export default function H2(props: { text: string }) {
  return (
    <>
      <h2 className="font-display mb-2 text-4xl text-neutral-700">
        {props.text}
      </h2>
    </>
  );
}
