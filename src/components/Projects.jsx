function Projects() {
  return (
    <div className="container mx-auto px-4 md:px-20 lg:px-40 py-10 md:py-20">
      <div className="w-full">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-8 md:mb-12 px-2 md:px-0">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 px-2 md:px-0">
          {/* Projeto 1 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                Title Project
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JS
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* Projeto 2 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                Title Project
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JS
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* Projeto 3 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                Title Project
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JS
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>

          {/* Projeto 4 */}
          <div className="flex flex-col bg-zinc-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="p-4 md:p-6 flex flex-col h-full">
              <h3 className="text-black text-lg md:text-xl uppercase font-medium mb-3 md:mb-4">
                Title Project
              </h3>
              <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  React
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  HTML
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  CSS
                </span>
                <span className="bg-violet-500 text-white px-2 md:px-3 py-1 rounded text-sm">
                  JS
                </span>
              </div>
              <p className="text-gray-700 text-sm md:text-base flex-grow">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <button className="bg-gradient-to-r from-[#5222D0] to-[#FF6196] px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg text-white font-medium hover:opacity-90 transition-opacity duration-300">
            Ver Todos Os Projetos
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
