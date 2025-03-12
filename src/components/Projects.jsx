function Projects() {
  return (
    <div
      id="projetos"
      className="container mx-auto px-4 md:px-20 lg:px-40 py-10 md:py-20"
    >
      <div className="w-full break-all">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 md:mb-12 px-2 md:px-0 ">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">
          {/* Projeto 1 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                PORTFÓLIO
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  REACT
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JSX
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Meu portfólio, feito com React, JSX, Tailwind CSS e HTML. <br />
              </p>

              <a
                className="text-blue-500 mt-2"
                href="https://portfolio-three-nu-29.vercel.app/"
                target="_blank"
              >
                https://portfolio-three-nu-29.vercel.app/
              </a>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                PREVISÃO DO TEMPO
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  REACT
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JSX
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  TAILWIND CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Projeto desenvolvido com React, JSX, Tailwind CSS e HTML. <br />
                Como estudo de caso, fiz um app de previsão do tempo. <br />
              </p>

              <a
                className="text-blue-500 mt-2"
                href="https://previsaodotempo-blond.vercel.app/"
                target="_blank"
              >
                https://previsaodotempo-blond.vercel.app/
              </a>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                GERENCIADOR DE TAREFAS
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  REACT
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JSX
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  TAILWIND CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
              </div>

              <p className="text-gray-700 text-sm md:text-base flex-grow">
                A partir de uma video aula do canal do youtube{" "}
                <a
                  className="text-violet-500 font-bold"
                  href="https://www.youtube.com/watch?v=2RWsLmu8yVc&t=4808s&ab_channel=FelipeRocha%E2%80%A2FullStackClub"
                  target="_blank"
                >
                  Felipe Rocha - Full Stack Club
                </a>
                , fiz um gerenciador de tarefas. <br />
                Começo dos meus estudos com React. <br />
              </p>
              <a
                className="text-blue-500 mt-2"
                href="https://aula-react-hazel.vercel.app/"
                target="_blank"
              >
                https://aula-react-hazel.vercel.app/
              </a>
            </div>
          </div>

          {/* Projeto 4 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                TRADUTOR COM FLASK
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  PYTHON
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  FLASK
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  CSS
                </span>
              </div>

              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Um simples site usando Flask e DeepTranslator para traduzir
                texto. <br />
              </p>

              <a
                className="text-blue-500 mt-2 text-wrap"
                href="https://github.com/devfiorentin/translator_flask"
                target="_blank"
              >
                https://github.com/devfiorentin/translator_flask
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-gradient-to-r from-[#5222D0] to-[#FF6196] px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg text-white font-medium hover:opacity-90 transition-opacity duration-300">
            <a href="https://github.com/devfiorentin" target="_blank">
              Ver Todos Os Projetos
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
