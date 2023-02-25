export default function H3(props: { text: string }) {
  return (
    <>
      <h3 className="font-display mb-2 text-3xl text-neutral-700">
        {props.text}
      </h3>
    </>
  );
}
