export default function P(props: { text: string }) {
  return (
    <>
      <p className=" text-neutral-700 font-brand leading-8">{props.text}</p>
    </>
  );
}
