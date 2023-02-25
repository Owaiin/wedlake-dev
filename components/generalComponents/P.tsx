export default function P(props: { text: string }) {
  return (
    <>
      <p className=" text-neutral-500 font-brand leading-8">{props.text}</p>
    </>
  );
}
