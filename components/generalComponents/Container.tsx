export default function Container({ children }: any) {
  return (
    <>
      <div className=" mx-auto px-5 w-full  2xl:max-w-screen-lg lg:max-w-screen-md">
        {children}
      </div>
    </>
  );
}
