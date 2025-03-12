import img from "../assets/img/foto-portfolio.png";

function InfoPortfolio() {
  return (
    <div className="text-justify flex flex-col md:flex-row px-4 md:px-20 lg:px-40 pt-28 md:pt-44 text-white md:justify-between w-full gap-8 md:gap-0">

      
      <section className="w-full items-left md:items-left text-center md:text-left">
        <span className="uppercase text-withe text-[16px] md:text-[20px]">
          Desenvolvedor Web
        </span>
        <h1 className="weigth-600 bg-[linear-gradient(90deg,_#5222D0_-0.37%,_#FF6196_115.65%)] bg-clip-text text-transparent text-[36px] md:text-[50px] mt-2 font-bold">
          Jean Fiorentin
        </h1>
        <p className="text-[#E6E6E6] text-base md:text-[20px] mt-5">
          Atualmente estou estudando React, Next.js, Tailwind CSS e Node.js{" "}
          <br className="hidden md:block" />
          Cortei a faculdade por motivos financeiros, e estou me dedicando aos
          estudos.
        </p>
        <button className="mt-7 gap-4 bg-gradient-to-r from-[#5222D0] to-[#FF6196] px-6 md:px-9 py-2 md:py-3 rounded-[8px] text-base md:text-[18px] hover:opacity-90 transition-opacity">
          Download CV
        </button>
      </section>

      <section className="flex justify-center md:justify-end w-full">
        <img
          className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] shadow-xl"
          src={img}
          alt="Foto de perfil"
        />
      </section>
    </div>
  );
}

export default InfoPortfolio;
