import Container from "./Container";
import H3 from "./H3";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <>
      <footer>
        <Container>
          <div className=" border-t border-neutral-400 w-full py-2 flex justify-between">
            <div>
              <p className="font-brand uppercase font-bold text-neutral-700 tracking-widest">
                Wedlake.DEV
              </p>
              <p className="text-xs text-neutral-500 font-brand font-bold">
                © Owain Wedlake {year}
              </p>
            </div>
            <div className="flex text-3xl text-neutral-700">
              <RiGithubFill
                onClick={() => openInNewTab("https://github.com/Owaiin")}
                className="hover:text-neutral-900 transition-colors duration-150 ease-in-out cursor-pointer"
              />
              <RiLinkedinBoxFill
                onClick={() =>
                  openInNewTab(
                    "https://www.linkedin.com/in/owain-wedlake-115009143/"
                  )
                }
                className="hover:text-neutral-900 transition-colors duration-150 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
