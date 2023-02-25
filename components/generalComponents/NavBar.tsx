import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <nav className="fixed top-0 w-screen bg-stone-100 z-50 ">
        <Container>
          <div className="flex justify-between items-center border-b border-neutral-400 pb-3">
            <p className="font-bold font-brand uppercase tracking-widest mt-5 text-neutral-700">
              Wedlake.Dev
            </p>
            <Button
              onSmash={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/owain-wedlake-115009143/"
                )
              }
              text="Contact"
            />
          </div>
        </Container>
      </nav>
    </>
  );
}
