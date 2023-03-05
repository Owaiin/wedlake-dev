export default function Button(props: {
  text?: string;
  onSmash?: any;
  altButton?: boolean;
  customProps?: string;
}) {
  return (
    <>
      <div
        className={`px-5 py-2 rounded ${
          props.altButton
            ? "bg-transparent border border-neutral-900 text-neutral-700 hover:text-white hover:bg-emerald-500 hover:border-emerald-500"
            : "bg-neutral-900 text-white border border-neutral-900 hover:border-emerald-500  hover:bg-emerald-500"
        }  tracking-widest font-brand inline-block mt-5 hover:shadow-md  cursor-pointer transition-all duration-150 ease-in-out ${
          props.customProps
        }`}
        onClick={props.onSmash}
      >
        {props.text}
      </div>
    </>
  );
}
