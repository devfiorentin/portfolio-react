import gmail from "../assets/gmail.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

function Footer() {
  return (
    <div id="contato" className="container mx-auto px-4 md:px-20 py-10">
      <div className="w-full">
        <span className="text-withe text-2xl md:text-3xl text-white font-bold">
          Redes Sociais
        </span>

        <section className="flex flex-wrap items-center justify-center md:justify-start p-4 md:p-10 pt-8 md:pt-14 gap-6 md:gap-10">
          <div className="justify-center items-center text-center">
            <a href="mailto:jeancordeiro.f@gmail.com" target="_blank">
              <img
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] hover:opacity-90 transition-opacity"
                src={gmail}
                alt="GMAIL"
              />
            </a>
          </div>

          <div className="justify-center items-center text-center">
            <a
              href="https://www.linkedin.com/in/jean-carlos-b9b117356/"
              target="_blank"
            >
              <img
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] hover:opacity-90 transition-opacity"
                src={linkedin}
                alt="LINKEDIN"
              />
            </a>
          </div>

          <div className="justify-center items-center text-center">
            <a href="https://github.com/devfiorentin" target="_blank">
              <img
                className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] hover:opacity-90 transition-opacity"
                src={github}
                alt="GITHUB"
              />
            </a>
          </div>
        </section>

        <div className="flex justify-center items-center text-center p-4 md:p-6">
          <span className="text-white text-base md:text-[18px]">
            Desenvolvido por Jean Fiorentin
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
